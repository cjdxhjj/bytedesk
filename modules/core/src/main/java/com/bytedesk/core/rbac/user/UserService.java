/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-01-29 16:21:24
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-11-10 08:36:35
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license. 
 *  仅支持企业内部员工自用，严禁私自用于销售、二次销售或者部署SaaS方式销售 
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.core.rbac.user;

import java.util.Optional;
import java.util.Set;

import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cache.annotation.Caching;
import org.springframework.lang.NonNull;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import com.bytedesk.core.config.BytedeskEventPublisher;
import com.bytedesk.core.config.BytedeskProperties;
import com.bytedesk.core.constant.AvatarConsts;
import com.bytedesk.core.constant.I18Consts;
import com.bytedesk.core.enums.PlatformEnum;
import com.bytedesk.core.event.GenericApplicationEvent;
import com.bytedesk.core.exception.EmailExistsException;
import com.bytedesk.core.exception.MobileExistsException;
import com.bytedesk.core.exception.UsernameExistsException;
import com.bytedesk.core.rbac.auth.AuthUser;
import com.bytedesk.core.rbac.organization.OrganizationEntity;
import com.bytedesk.core.rbac.organization.OrganizationRepository;
import com.bytedesk.core.rbac.role.RoleConsts;
import com.bytedesk.core.rbac.role.RoleEntity;
import com.bytedesk.core.rbac.role.RoleService;
import com.bytedesk.core.uid.UidUtils;
import com.bytedesk.core.utils.ConvertUtils;

import lombok.AllArgsConstructor;
// import lombok.extern.slf4j.Slf4j;

import org.modelmapper.ModelMapper;

// @Slf4j
@Service
@AllArgsConstructor
public class UserService {

    // cycle dependency - 循环引用，不能使用
    // private final AuthService authService;

    private final UserRepository userRepository;

    private final ModelMapper modelMapper;

    private final RoleService roleService;

    private final BytedeskProperties bytedeskProperties;

    private final BCryptPasswordEncoder passwordEncoder;

    private final UidUtils uidUtils;

    private final OrganizationRepository organizationRepository;

    private final BytedeskEventPublisher bytedeskEventPublisher;

    @Transactional
    public UserResponse register(UserRequest request) {

        if (StringUtils.hasText(request.getEmail())
                && existsByEmailAndPlatform(request.getEmail(),
                        request.getPlatform())) {
            throw new EmailExistsException("Email " + request.getEmail() + " already exists..!!");
        }
        if (StringUtils.hasText(request.getMobile())
                && existsByMobileAndPlatform(request.getMobile(),
                        request.getPlatform())) {
            throw new MobileExistsException("Mobile " + request.getMobile() + " already exists..!!");
        }
        //
        UserEntity user = modelMapper.map(request, UserEntity.class);
        user.setUid(uidUtils.getUid());
        user.setPlatform(request.getPlatform());
        //
        if (StringUtils.hasText(request.getNickname())) {
            user.setNickname(request.getNickname());
        } else if (StringUtils.hasText(request.getMobile())) {
            user.setNickname("User" + request.getMobile().substring(7));
        } else {
            user.setNickname(createNickname());
        }
        //
        if (StringUtils.hasText(request.getAvatar())) {
            user.setAvatar(request.getAvatar());
        } else {
            user.setAvatar(AvatarConsts.DEFAULT_AVATAR_URL);
        }
        //
        if (StringUtils.hasText(request.getPassword())) {
            String rawPassword = request.getPassword();
            String encodedPassword = passwordEncoder.encode(rawPassword);
            user.setPassword(encodedPassword);
        }
        // 只有经过验证的邮箱，才真正执行注册
        if (StringUtils.hasText(request.getEmail())) {
            user.setUsername(request.getEmail());
            user.setNum(request.getEmail());
            // 默认注册时，仅验证手机号，无需验证邮箱
            user.setEmailVerified(false);
        }
        // 只有经过验证的手机号，才真正执行注册
        if (StringUtils.hasText(request.getMobile())) {
            user.setNum(request.getMobile());
            user.setMobileVerified(true);
        }
        user.setEnabled(true);
        //
        user = save(user);
        //
        return ConvertUtils.convertToUserResponse(user);
    }

    @Transactional
    public UserResponse update(UserRequest request) {

        UserEntity currentUser = AuthUser.getCurrentUser(); // FIXME: 直接使用此user save，会报错
        Optional<UserEntity> userOptional = findByUid(currentUser.getUid());
        if (userOptional.isPresent()) {
            UserEntity user = userOptional.get();

            if (StringUtils.hasText(request.getUsername())) {
                // 如果新用户名跟旧用户名不同，需要首先判断新用户名是否已经存在，如果存在则抛出异常
                if (!request.getUsername().equals(user.getUsername())) {
                    if (existsByUsernameAndPlatform(request.getUsername(),
                            request.getPlatform())) {
                        throw new UsernameExistsException(
                                "Username " + request.getUsername() + " already exists..!!");
                    }
                }
                user.setUsername(request.getUsername());
            }

            if (StringUtils.hasText(request.getNickname())) {
                user.setNickname(request.getNickname());
            }

            if (StringUtils.hasText(request.getAvatar())) {
                user.setAvatar(request.getAvatar());
            }

            if (StringUtils.hasText(request.getEmail())) {
                // 如果新邮箱跟旧邮箱不同，需要首先判断新邮箱是否已经存在，如果存在则抛出异常
                if (!request.getEmail().equals(user.getEmail())) {
                    if (existsByEmailAndPlatform(request.getEmail(),
                            request.getPlatform())) {
                        throw new EmailExistsException("Email " + request.getEmail() + " already exists..!!");
                    }
                }
                user.setEmail(request.getEmail());
            }

            if (StringUtils.hasText(request.getMobile())) {
                // 如果新手机号跟旧手机号不同，需要首先判断新手机号是否已经存在，如果存在则抛出异常
                if (!request.getMobile().equals(user.getMobile())) {
                    if (existsByMobileAndPlatform(request.getMobile(),
                            request.getPlatform())) {
                        throw new MobileExistsException("Mobile " + request.getMobile() + " already exists..!!");
                    }
                }
                user.setMobile(request.getMobile());
            }

            if (StringUtils.hasText(request.getDescription())) {
                user.setDescription(request.getDescription());
            }

            // TODO: 设置角色role

            UserEntity updatedUser = save(user);
            if (updatedUser == null) {
                throw new RuntimeException("User update failed..!!");
            }

            return ConvertUtils.convertToUserResponse(user);

        } else {
            throw new RuntimeException("User not found..!!");
        }
    }

    @Transactional
    public UserResponse changePassword(UserRequest request) {

        UserEntity currentUser = AuthUser.getCurrentUser(); // FIXME: 直接使用此user save，会报错
        Optional<UserEntity> userOptional = findByUid(currentUser.getUid());
        if (userOptional.isPresent()) {
            UserEntity user = userOptional.get();
            String oldEncryptedPassword = user.getPassword(); // 假设这是数据库中加密后的密码
            String oldRawPassword = request.getOldPassword(); // 用户输入的旧密码
            String newRawPassword = request.getNewPassword(); // 用户输入的新密码

            // 验证旧密码
            if (oldEncryptedPassword == null || passwordEncoder.matches(oldRawPassword, oldEncryptedPassword)) {
                // 旧密码验证通过，设置新密码
                String newEncryptedPassword = passwordEncoder.encode(newRawPassword);
                user.setPassword(newEncryptedPassword); // 更新用户密码
                user = save(user); // 保存用户信息到数据库，假设save方法已经存在
                //
                return ConvertUtils.convertToUserResponse(user); // 返回更新后的用户信息
            } else {
                // 旧密码验证失败，抛出异常或返回错误信息
                throw new RuntimeException(I18Consts.I18N_USER_OLD_PASSWORD_WRONG);
            }
        } else {
            throw new RuntimeException("User not found..!!");
        }
    }

    @Transactional
    public UserResponse changeEmail(UserRequest request) {
        UserEntity currentUser = AuthUser.getCurrentUser(); // FIXME: 直接使用此user save，会报错
        Optional<UserEntity> userOptional = findByUid(currentUser.getUid());
        if (userOptional.isPresent()) {
            UserEntity user = userOptional.get();
            if (StringUtils.hasText(request.getEmail())) {
                // 如果新邮箱跟旧邮箱不同，需要首先判断新邮箱是否已经存在，如果存在则抛出异常
                if (!request.getEmail().equals(user.getEmail())) {
                    if (existsByEmailAndPlatform(request.getEmail(),
                            request.getPlatform())) {
                        throw new EmailExistsException("Email " + request.getEmail() + " already exists..!!");
                    }
                }
                user.setEmail(request.getEmail());
            } else {
                throw new RuntimeException("Email is required..!!");
            }
            user.setEmailVerified(true);
            user = save(user);
            // 
            return ConvertUtils.convertToUserResponse(user);
        } else {
            throw new RuntimeException("User not found..!!");
        }
    }

    @Transactional
    public UserResponse changeMobile(UserRequest request) {
        UserEntity currentUser = AuthUser.getCurrentUser(); // FIXME: 直接使用此user save，会报错
        Optional<UserEntity> userOptional = findByUid(currentUser.getUid());
        if (userOptional.isPresent()) {
            UserEntity user = userOptional.get();
            if (StringUtils.hasText(request.getMobile())) {
                // 如果新手机号跟旧手机号不同，需要首先判断新手机号是否已经存在，如果存在则抛出异常
                if (!request.getMobile().equals(user.getMobile())) {
                    if (existsByMobileAndPlatform(request.getMobile(),
                            request.getPlatform())) {
                        throw new MobileExistsException("Mobile " + request.getMobile() + " already exists..!!");
                    }
                }
                user.setMobile(request.getMobile());
            } else {
                throw new RuntimeException("Mobile is required..!!");
            }
            user.setMobileVerified(true);
            user = save(user);

            return ConvertUtils.convertToUserResponse(user);
        } else {
            throw new RuntimeException("User not found..!!");
        }
    }

    @Transactional
    public UserEntity createUserFromMember(UserRequest request, Set<String> roleUids) {
        //
        if (StringUtils.hasText(request.getMobile())
            && existsByMobileAndPlatform(request.getMobile(), request.getPlatform())) {
            Optional<UserEntity> userOptional = findByMobileAndPlatform(request.getMobile(), request.getPlatform());
            return userOptional.get();
        }

        if (StringUtils.hasText(request.getEmail())
                && existsByEmailAndPlatform(request.getEmail(), request.getPlatform())) {
            Optional<UserEntity> userOptional = findByEmailAndPlatform(request.getEmail(),
                    request.getPlatform());
            return userOptional.get();
        }
        //
        UserEntity user = UserEntity.builder()
                .avatar(request.getAvatar())
                .nickname(request.getNickname())
                .mobile(request.getMobile())
                .num(request.getMobile())
                .email(request.getEmail())
                .superUser(false)
                .emailVerified(false)
                .mobileVerified(false)
                .build();
        user.setUid(uidUtils.getUid());
        // 
        if (StringUtils.hasText(request.getEmail())) {
            user.setUsername(request.getEmail());
        } else if (StringUtils.hasText(request.getMobile())) {
            user.setUsername(request.getMobile());
        }
        //
        if (StringUtils.hasText(request.getPassword())) {
            user.setPassword(passwordEncoder.encode(request.getPassword()));
        } else {
            user.setPassword(passwordEncoder.encode(bytedeskProperties.getPasswordDefault()));
        }
        //
        return updateUserRolesFromMember(user, request.getOrgUid(), roleUids);
    }

    // 
    public UserEntity updateUserRolesFromMember(UserEntity user, String orgUid, Set<String> roleUids) {
        // 
        Optional<OrganizationEntity> orgOptional = organizationRepository.findByUid(orgUid);
        if (!orgOptional.isPresent()) {
            throw new RuntimeException("Organization not found..!!");
        }
        user.removeOrganizationRoles(orgOptional.get());
        // 
        Optional<RoleEntity> roleOptional = roleService.findByNamePlatform(RoleConsts.ROLE_MEMBER);
        if (roleOptional.isPresent()) {
            OrganizationEntity organization = orgOptional.get();
            RoleEntity role = roleOptional.get();
            // 确保角色是持久化的
            role = roleService.save(role);
            user.addOrganizationRole(organization, role);
        }
        // 增加角色，遍历roleUids，逐个添加
        for (String roleUid : roleUids) {
            Optional<RoleEntity> optional = roleService.findByUid(roleUid);
            if (optional.isPresent()) {
                RoleEntity role = optional.get();
                // 确保角色是持久化的
                role = roleService.save(role);
                user.addOrganizationRole(orgOptional.get(), role);
            } else {
                throw new RuntimeException("Role not found..!!");
            }
        }
        // 
        UserEntity savedEntity = save(user);
        if (savedEntity == null) {
            throw new RuntimeException("User create failed..!!");
        }
        // TODO: 发送邮件
        // TODO: 短信通知
        // TODO: 系统通知Notice
        return savedEntity;
    }

    public UserEntity addCustomerServiceRole(UserEntity user) {
        Optional<RoleEntity> roleOptional = roleService.findByNamePlatform(RoleConsts.ROLE_CUSTOMER_SERVICE);
        if (roleOptional.isPresent()) {
            RoleEntity role = roleOptional.get();
            // 确保角色是持久化的
            role = roleService.save(role);
            user.addOrganizationRole(user.getCurrentOrganization(), role);
            // 
            UserEntity savedEntity = save(user);
            if (savedEntity == null) {
                throw new RuntimeException("User add cs role failed..!!");
            }
            return savedEntity;
        } else {
            throw new RuntimeException("Role not found..!!");
        }
    }

    public UserEntity removeCustomerServiceRole(UserEntity user) {
        Optional<RoleEntity> roleOptional = roleService.findByNamePlatform(RoleConsts.ROLE_CUSTOMER_SERVICE);
        if (roleOptional.isPresent()) {
            user.removeOrganizationRole(user.getCurrentOrganization(), roleOptional.get());
            // 
            UserEntity savedEntity = save(user);
            if (savedEntity == null) {
                throw new RuntimeException("User remove cs role failed..!!");
            }
            return savedEntity;
        } else {
            throw new RuntimeException("Role not found..!!");
        }
    }

    public void logout() {
        // TODO: 清理token，使其过期
        UserEntity user = AuthUser.getCurrentUser();
        bytedeskEventPublisher.publishGenericApplicationEvent(new GenericApplicationEvent<UserLogoutEvent>(this, new UserLogoutEvent(this, user)));
    }

    @Cacheable(value = "user", key = "#email", unless = "#result == null")
    public Optional<UserEntity> findByEmailAndPlatform(String email, String platform) {
        return userRepository.findByEmailAndPlatformAndDeletedFalse(email, platform);
    }

    @Cacheable(value = "user", key = "#mobile", unless = "#result == null")
    public Optional<UserEntity> findByMobileAndPlatform(String mobile, String platform) {
        return userRepository.findByMobileAndPlatformAndDeletedFalse(mobile, platform);
    }

    @Cacheable(value = "user", key = "#username", unless = "#result == null")
    public Optional<UserEntity> findByUsernameAndPlatform(String username, String platform) {
        return userRepository.findByUsernameAndPlatformAndDeletedFalse(username, platform);
    }

    // @Cacheable(value = "user", key = "#uid", unless = "#result == null")
    public Optional<UserEntity> findByUid(String uid) {
        return userRepository.findByUid(uid);
    }

    @Cacheable(value = "admin", unless = "#result == null")
    public Optional<UserEntity> getAdmin() {
        return userRepository.findByUsernameAndPlatformAndDeletedFalse(bytedeskProperties.getEmail(),
                PlatformEnum.BYTEDESK.name());
    }

    //
    @Cacheable(value = "user:exists", key = "#username", unless = "#result == null")
    public Boolean existsByUsernameAndPlatform(@NonNull String username, @NonNull String platform) {
        if (!StringUtils.hasText(username)) {
            return false;
        }
        return userRepository.existsByUsernameAndPlatformAndDeletedFalse(username, platform);
    }

    @Cacheable(value = "user:exists", key = "#mobile", unless = "#result == null")
    public Boolean existsByMobileAndPlatform(@NonNull String mobile, @NonNull String platform) {
        if (!StringUtils.hasText(mobile)) {
            return false;
        }
        return userRepository.existsByMobileAndPlatformAndDeletedFalse(mobile, platform);
    }

    @Cacheable(value = "user:exists", key = "#email", unless = "#result == null")
    public Boolean existsByEmailAndPlatform(@NonNull String email, @NonNull String platform) {
        if (!StringUtils.hasText(email)) {
            return false;
        }
        return userRepository.existsByEmailAndPlatformAndDeletedFalse(email, platform);
    }

    public Boolean existsBySuperUser() {
        return userRepository.existsBySuperUserAndDeletedFalse(true);
    }

    @Caching(put = {
            @CachePut(value = "user", key = "#user.username", unless = "#user.username == null"),
            @CachePut(value = "user", key = "#user.mobile", unless = "#user.mobile == null"),
            @CachePut(value = "user", key = "#user.email", unless = "#user.email == null"),
            @CachePut(value = "user", key = "#user.uid", unless = "#user.uid == null"),
            // TODO: 此处put的exists内容跟缓存时内容类型是否一致？
            // @CachePut(value = "user:exists", key = "#user.username"),
            // @CachePut(value = "user:exists", key = "#user.mobile"),
            // @CachePut(value = "user:exists", key = "#user.email"),
    })
    public UserEntity save(@NonNull UserEntity user) {
        try {
            return userRepository.save(user);
        } catch (Exception e) {
            // TODO: handle exception
            e.printStackTrace();
        }
        return null;
    }

    @Caching(evict = {
            @CacheEvict(value = "user", key = "#user.username"),
            @CacheEvict(value = "user", key = "#user.mobile"),
            @CacheEvict(value = "user", key = "#user.email"),
            @CacheEvict(value = "user", key = "#user.uid"),
            @CacheEvict(value = "user:exists", key = "#user.username"),
            @CacheEvict(value = "user:exists", key = "#user.mobile"),
            @CacheEvict(value = "user:exists", key = "#user.email"),
    })
    public void delete(@NonNull UserEntity user) {
        user.setDeleted(true);
        save(user);
    }

    // TODO: 待完善
    public String createNickname() {
        String randomId = uidUtils.getCacheSerialUid().substring(11, 15);
        return "User" + randomId;
    }

}
