/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-01-29 16:20:17
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-06-28 12:19:22
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license. 
 *  仅支持企业内部员工自用，严禁私自用于销售、二次销售或者部署SaaS方式销售 
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.team.member;

import java.util.Optional;
import org.modelmapper.ModelMapper;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cache.annotation.Caching;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.orm.ObjectOptimisticLockingFailureException;
import org.springframework.cache.annotation.CachePut;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import com.bytedesk.core.config.BytedeskProperties;
import com.bytedesk.core.constant.AvatarConsts;
import com.bytedesk.core.constant.I18Consts;
import com.bytedesk.core.constant.TypeConsts;
import com.bytedesk.core.enums.PlatformEnum;
// import com.bytedesk.core.event.BytedeskEventPublisher;
import com.bytedesk.core.exception.EmailExistsException;
import com.bytedesk.core.exception.MobileExistsException;
import com.bytedesk.core.rbac.auth.AuthService;
import com.bytedesk.core.rbac.user.User;
import com.bytedesk.core.rbac.user.UserConsts;
import com.bytedesk.core.rbac.user.UserRequest;
import com.bytedesk.core.rbac.user.UserService;
import com.bytedesk.core.uid.UidUtils;
import com.bytedesk.team.department.Department;
import com.bytedesk.team.department.DepartmentService;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@AllArgsConstructor
public class MemberService {

    private UserService userService;

    private DepartmentService departmentService;

    private MemberRepository memberRepository;

    private ModelMapper modelMapper;

    private UidUtils uidUtils;

    private AuthService authService;

    private BytedeskProperties bytedeskProperties;

    // private BytedeskEventPublisher bytedeskEventPublisher;

    public Page<MemberResponse> queryByOrg(MemberRequest memberRequest) {

        Pageable pageable = PageRequest.of(memberRequest.getPageNumber(), memberRequest.getPageSize(),
                Sort.Direction.ASC,
                "id");

        Specification<Member> spec = MemberSpecification.search(memberRequest);
        Page<Member> memberPage = memberRepository.findAll(spec, pageable);
        // Page<Member> memberPage =
        // memberRepository.findByOrgUidAndDeleted(memberRequest.getOrgUid(), false,
        // pageable);

        return memberPage.map(this::convertToResponse);
    }

    public MemberResponse query(MemberRequest memberRequest) {
        User user = authService.getCurrentUser();
        Optional<Member> memberOptional = findByUserAndOrgUid(user, memberRequest.getOrgUid());
        if (!memberOptional.isPresent()) {
            throw new RuntimeException("Member does not exist."); // 抛出具体的异常
        }
        return convertToResponse(memberOptional.get());
    }

    public MemberResponse queryByUserUid(MemberRequest memberRequest) {
        Optional<Member> memberOptional = findByUserUid(memberRequest.getUid());
        if (!memberOptional.isPresent()) {
            throw new RuntimeException("Member does not exist."); // 抛出具体的异常
        }
        return convertToResponse(memberOptional.get());
    }

    @Transactional
    public MemberResponse create(MemberRequest memberRequest) {
        //
        if (StringUtils.hasText(memberRequest.getEmail())
                && existsByEmailAndOrgUid(memberRequest.getEmail(), memberRequest.getOrgUid())) {
            throw new EmailExistsException("Email " + memberRequest.getEmail() + " already exists..!!");
        }
        if (StringUtils.hasText(memberRequest.getMobile())
                && existsByMobileAndOrgUid(memberRequest.getMobile(), memberRequest.getOrgUid())) {
            throw new MobileExistsException("Mobile " + memberRequest.getMobile() + " already exists..!!");
        }
        // 查找部门信息
        Optional<Department> depOptional = departmentService.findByUid(memberRequest.getDepUid());
        if (!depOptional.isPresent()) {
            throw new RuntimeException("Department does not exist."); // 抛出具体的异常
        }
        //
        Member member = modelMapper.map(memberRequest, Member.class);
        member.setUid(uidUtils.getCacheSerialUid());
        //
        member.addDepartment(depOptional.get());
        member.setOrgUid(depOptional.get().getOrgUid());
        //
        // 尝试根据邮箱和平台查找用户
        UserRequest userRequest = modelMapper.map(memberRequest, UserRequest.class);
        userRequest.setAvatar(AvatarConsts.DEFAULT_AVATAR_URL);
        userRequest.setPlatform(PlatformEnum.BYTEDESK.getValue());
        userRequest.setOrgUid(depOptional.get().getOrgUid());
        //
        User user = null;
        if (StringUtils.hasText(memberRequest.getMobile())) {
            user = userService.findByMobileAndPlatform(memberRequest.getMobile(),
                    PlatformEnum.BYTEDESK)
                    .orElseGet(() -> userService.createUser(userRequest));
        } else if (StringUtils.hasText(memberRequest.getEmail())) {
            user = userService.findByEmailAndPlatform(memberRequest.getEmail(),
                    PlatformEnum.BYTEDESK)
                    .orElseGet(() -> userService.createUser(userRequest));
        } else {
            throw new RuntimeException("mobile and email should not be both null.");
        }

        // 设置用户到成员对象中
        member.setUser(user);
        //
        Member saveMember = save(member);
        if (saveMember == null) {
            // 根据业务逻辑决定如何处理保存失败的情况
            // 例如，可以抛出一个异常或返回一个错误响应
            throw new RuntimeException("Failed to save member.");
        }

        return convertToResponse(saveMember);
    }

    public MemberResponse update(MemberRequest memberRequest) {
        //
        Optional<Member> memberOptional = findByUid(memberRequest.getUid());
        if (!memberOptional.isPresent()) {
            throw new RuntimeException("Failed to find member.");
        }
        Optional<Department> depOptional = departmentService.findByUid(memberRequest.getDepUid());
        if (!depOptional.isPresent()) {
            throw new RuntimeException("Failed to find department.");
        }
        //
        Member member = memberOptional.get();
        //
        modelMapper.map(memberRequest, member);
        // member.setJobNo(memberRequest.getJobNo());
        // member.setNickname(memberRequest.getNickname());
        // member.setSeatNo(memberRequest.getSeatNo());
        // member.setTelephone(memberRequest.getTelephone());
        // member.setEmail(memberRequest.getEmail());
        //
        member.getDepartments().clear();
        member.addDepartment(depOptional.get());
        member.setOrgUid(depOptional.get().getOrgUid());
        //
        Member result = save(member);

        return convertToResponse(result);
    }

    @Cacheable(value = "member", key = "#uid", unless = "#result == null")
    public Optional<Member> findByUid(String uid) {
        return memberRepository.findByUidAndDeleted(uid, false);
    }

    @Cacheable(value = "member", key = "#uid", unless = "#result == null")
    public Optional<Member> findByUserUid(String uid) {
        return memberRepository.findByUser_UidAndDeleted(uid, false);
    }

    @Cacheable(value = "member", key = "#mobile", unless = "#result == null")
    public Optional<Member> findByMobileAndOrgUid(String mobile, String orgUid) {
        return memberRepository.findByMobileAndOrgUidAndDeleted(mobile, orgUid, false);
    }

    @Cacheable(value = "member", key = "#email", unless = "#result == null")
    public Optional<Member> findByEmailAndOrgUid(String email, String orgUid) {
        return memberRepository.findByEmailAndOrgUidAndDeleted(email, orgUid, false);
    }

    @Cacheable(value = "member", key = "#user.uid", unless = "#result == null")
    public Optional<Member> findByUserAndOrgUid(User user, String orgUid) {
        return memberRepository.findByUserAndOrgUidAndDeleted(user, orgUid, false);
    }

    public Boolean existsByEmailAndOrgUid(String email, String orgUid) {
        return memberRepository.existsByEmailAndOrgUidAndDeleted(email, orgUid, false);
    }

    public Boolean existsByMobileAndOrgUid(String mobile, String orgUid) {
        return memberRepository.existsByMobileAndOrgUidAndDeleted(mobile, orgUid, false);
    }

    @Caching(put = {
            @CachePut(value = "member", key = "#member.uid", unless = "#member.uid == null"),
            @CachePut(value = "member", key = "#member.mobile", unless = "#member.mobile == null"),
            @CachePut(value = "member", key = "#member.email", unless = "#member.email == null")
    })
    private Member save(Member member) {
        try {
            return memberRepository.save(member);
        } catch (ObjectOptimisticLockingFailureException e) {
            // TODO: handle exception
            handleOptimisticLockingFailureException(e, member);
        }
        return null;
    }

    public void deleteByUid(String uid) {
        Optional<Member> memberOptional = findByUid(uid);
        memberOptional.ifPresent(member -> {
            member.setDeleted(true);
            save(member);
        });
    }

    private MemberResponse convertToResponse(Member member) {
        return modelMapper.map(member, MemberResponse.class);
    }

    // TODO: 待处理
    private void handleOptimisticLockingFailureException(ObjectOptimisticLockingFailureException e, Member member) {
        // 可以在这里实现重试逻辑，例如使用递归调用或定时任务
        // 也可以记录日志、发送通知或执行其他业务逻辑
        log.error("Optimistic locking failure for member: {}", member.getUid());
        // e.printStackTrace();
        // 根据业务逻辑决定如何处理失败，例如通知用户稍后重试或执行其他操作
    }

    //
    private static final String[] departments = {
            I18Consts.I18N_PREFIX + TypeConsts.DEPT_ADMIN,
            I18Consts.I18N_PREFIX + TypeConsts.DEPT_HR,
            I18Consts.I18N_PREFIX + TypeConsts.DEPT_ORG,
            I18Consts.I18N_PREFIX + TypeConsts.DEPT_IT,
            I18Consts.I18N_PREFIX + TypeConsts.DEPT_MONEY,
            I18Consts.I18N_PREFIX + TypeConsts.DEPT_MARKETING,
            I18Consts.I18N_PREFIX + TypeConsts.DEPT_SALES,
            I18Consts.I18N_PREFIX + TypeConsts.DEPT_CUSTOMER_SERVICE
    };

    public void initData() {
        //
        if (memberRepository.count() > 0) {
            return;
        }
        //
        String orgUid = UserConsts.DEFAULT_ORGANIZATION_UID;
        for (int i = 0; i < departments.length; i++) {
            String department = departments[i];
            Optional<Department> depOptional = departmentService.findByNameAndOrgUid(department, orgUid);
            if (depOptional.isPresent()) {
                if (i == 0) {
                    MemberRequest memberRequest = MemberRequest.builder()
                            .jobNo("000")
                            .jobTitle(I18Consts.I18N_ADMIN)
                            .nickname("User000")
                            .seatNo("000")
                            .telephone("000")
                            .mobile(bytedeskProperties.getMobile())
                            .email(bytedeskProperties.getEmail())
                            // .orgUid(orgUid)
                            .depUid(depOptional.get().getUid())
                            .build();
                    memberRequest.setOrgUid(orgUid);
                    create(memberRequest);
                } else {
                    String userNo = String.format("%03d", i);
                    MemberRequest memberRequest = MemberRequest.builder()
                            .jobNo(userNo)
                            .password(bytedeskProperties.getPasswordDefault())
                            .nickname("User" + userNo)
                            .seatNo(userNo)
                            .telephone(userNo)
                            .mobile("12345678" + userNo)
                            .email(userNo + "@email.com")
                            // .orgUid(orgUid)
                            .depUid(depOptional.get().getUid())
                            .build();
                    memberRequest.setOrgUid(orgUid);
                    create(memberRequest);
                }

            }
        }

    }

}
