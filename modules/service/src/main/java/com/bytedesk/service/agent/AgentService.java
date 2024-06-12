/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-01-29 16:19:51
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-06-12 13:10:43
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license. 
 *  仅支持企业内部员工自用，严禁私自用于销售、二次销售或者部署SaaS方式销售 
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.service.agent;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;
import java.util.Queue;

import org.modelmapper.ModelMapper;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cache.annotation.Caching;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.orm.ObjectOptimisticLockingFailureException;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import com.alibaba.fastjson2.JSONObject;
import com.bytedesk.ai.robot.Robot;
import com.bytedesk.ai.robot.RobotService;
import com.bytedesk.core.action.ActionRequest;
import com.bytedesk.core.config.BytedeskProperties;
import com.bytedesk.core.constant.AvatarConsts;
import com.bytedesk.core.constant.I18Consts;
import com.bytedesk.core.constant.TypeConsts;
import com.bytedesk.core.constant.UserConsts;
import com.bytedesk.core.event.BytedeskEventPublisher;
import com.bytedesk.core.quick_button.QuickButton;
import com.bytedesk.core.quick_button.QuickButtonService;
import com.bytedesk.core.rbac.auth.AuthService;
import com.bytedesk.core.rbac.user.User;
import com.bytedesk.core.uid.UidUtils;
import com.bytedesk.service.common.ServiceSettings;
import com.bytedesk.service.utils.ConvertServiceUtils;
import com.bytedesk.service.worktime.Worktime;
import com.bytedesk.service.worktime.WorktimeService;
import com.bytedesk.team.member.Member;
import com.bytedesk.team.member.MemberService;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@AllArgsConstructor
public class AgentService {

    private final AgentRepository agentRepository;

    private final ModelMapper modelMapper;

    private final UidUtils uidUtils;

    private final BytedeskEventPublisher bytedeskEventPublisher;

    private final MemberService memberService;

    private final AuthService authService;

    private final RobotService robotService;

    private final WorktimeService worktimeService;

    private final QuickButtonService quickButtonService;

    private final BytedeskProperties bytedeskProperties;

    public Page<AgentResponse> queryByOrg(AgentRequest agentRequest) {

        Pageable pageable = PageRequest.of(agentRequest.getPageNumber(), agentRequest.getPageSize(), Sort.Direction.ASC,
                "id");

        Specification<Agent> spec = AgentSpecification.search(agentRequest);
        Page<Agent> agentPage = agentRepository.findAll(spec, pageable);
        // Page<Agent> agentPage =
        // agentRepository.findByOrgUidAndDeleted(agentRequest.getOrgUid(), false,
        // pageable);

        return agentPage.map(ConvertServiceUtils::convertToAgentResponse);
    }

    public Optional<AgentResponse> query(AgentRequest agentRequest) {

        User user = authService.getCurrentUser();

        Optional<Agent> agentOptional = findByUserUidAndOrgUid(user.getUid(), agentRequest.getOrgUid());
        if (agentOptional.isPresent()) {
            return Optional.of(ConvertServiceUtils.convertToAgentResponse(agentOptional.get()));
        }

        return Optional.empty();
    }

    @Transactional
    public AgentResponse create(AgentRequest agentRequest) {

        Optional<Member> memberOptional = memberService.findByUid(agentRequest.getMemberUid());
        if (!memberOptional.isPresent()) {
            throw new RuntimeException("member uid: " + agentRequest.getMemberUid() + " not found");
        }
        // 一个user仅能绑定一个坐席
        if (existsByUserUidAndOrgUid(memberOptional.get().getUser().getUid(), agentRequest.getOrgUid())) {
            throw new RuntimeException("user already has an agent..!!");
        }
        //
        if (!StringUtils.hasText(agentRequest.getAvatar())) {
            agentRequest.setAvatar(AvatarConsts.DEFAULT_AGENT_AVATAR_URL);
        }
        if (!StringUtils.hasText(agentRequest.getDescription())) {
            agentRequest.setDescription(I18Consts.I18N_AGENT_DESCRIPTION);
        }
        //
        Agent agent = modelMapper.map(agentRequest, Agent.class);
        if (!StringUtils.hasText(agent.getUid())) {
            agent.setUid(uidUtils.getCacheSerialUid());
        }
        //
        agent.setMember(memberOptional.get());
        if (memberOptional.get().getUser() != null) {
            agent.setUserUid(memberOptional.get().getUser().getUid());
        } else {
            throw new RuntimeException("user not found with uid: " + memberOptional.get().getUser().getUid());
        }
        //
        Iterator<String> worktimeTterator = agentRequest.getServiceSettings().getWorktimeUids().iterator();
        while (worktimeTterator.hasNext()) {
            String worktimeUid = worktimeTterator.next();
            Optional<Worktime> worktimeOptional = worktimeService.findByUid(worktimeUid);
            if (worktimeOptional.isPresent()) {
                Worktime worktimeEntity = worktimeOptional.get();
                agent.getServiceSettings().getWorktimes().add(worktimeEntity);
            } else {
                throw new RuntimeException(worktimeUid + " is not found.");
            }
        }
        // 保存Agent并检查返回值
        Agent savedAgent = save(agent);
        if (savedAgent == null) {
            // 根据业务逻辑决定如何处理保存失败的情况
            // 例如，可以抛出一个异常或返回一个错误响应
            throw new RuntimeException("Failed to save agent.");
        }
        //
        return ConvertServiceUtils.convertToAgentResponse(savedAgent);
    }

    public AgentResponse update(AgentRequest agentRequest) {

        Optional<Agent> agentOptional = findByUid(agentRequest.getUid());
        if (!agentOptional.isPresent()) {
            // 如果找不到对应的Agent，则返回null
            throw new RuntimeException("null agent found with uid: " + agentRequest.getUid());
        }
        //
        Agent agent = agentOptional.get();
        // 更新Agent的信息
        // modelMapper.map(agentRequest, agent); // 需要排除 connected 字段，否则会改变真实连接状态
        agent.setNickname(agentRequest.getNickname());
        agent.setAvatar(agentRequest.getAvatar());
        agent.setMobile(agentRequest.getMobile());
        agent.setEmail(agentRequest.getEmail());
        agent.setDescription(agentRequest.getDescription());
        agent.setStatus(agentRequest.getStatus());
        agent.setMaxThreadCount(agentRequest.getMaxThreadCount());

        ServiceSettings serviceSettings = modelMapper.map(agentRequest.getServiceSettings(), ServiceSettings.class);
        if (StringUtils.hasText(agentRequest.getServiceSettings().getRobotUid())) {
            Optional<Robot> robotOptional = robotService.findByUid(agentRequest.getServiceSettings().getRobotUid());
            if (robotOptional.isPresent()) {
                Robot robot = robotOptional.get();
                serviceSettings.setRobot(robot);
            } else {
                throw new RuntimeException(agentRequest.getServiceSettings().getRobotUid() + " is not found.");
            }
        }
        if (agentRequest.getServiceSettings().getQuickButtonUids() != null
                && agentRequest.getServiceSettings().getQuickButtonUids().size() > 0) {
            Iterator<String> iterator = agentRequest.getServiceSettings().getQuickButtonUids().iterator();
            while (iterator.hasNext()) {
                String quickButtonUid = iterator.next();
                Optional<QuickButton> quickButtonOptional = quickButtonService.findByUid(quickButtonUid);
                if (quickButtonOptional.isPresent()) {
                    QuickButton quickButtonEntity = quickButtonOptional.get();

                    serviceSettings.getQuickButtons().add(quickButtonEntity);
                }
            }
        }
        //
        Iterator<String> worktimeTterator = agentRequest.getServiceSettings().getWorktimeUids().iterator();
        while (worktimeTterator.hasNext()) {
            String worktimeUid = worktimeTterator.next();
            Optional<Worktime> worktimeOptional = worktimeService.findByUid(worktimeUid);
            if (worktimeOptional.isPresent()) {
                Worktime worktimeEntity = worktimeOptional.get();
                serviceSettings.getWorktimes().add(worktimeEntity);
            } else {
                throw new RuntimeException(worktimeUid + " is not found.");
            }
        }
        agent.setServiceSettings(serviceSettings);

        // 暂不允许修改绑定成员
        // agent.setMember(memberOptional.get());
        // agent.setUserUid(memberOptional.get().getUser().getUid());
        //
        // 保存Agent，并检查返回值
        Agent updatedAgent = save(agent);
        if (updatedAgent == null) {
            // 如果保存失败，可以选择抛出异常或记录日志，这里以抛出异常为例
            throw new RuntimeException("Failed to update agent with uid: " + agentRequest.getUid());
        }

        // 转换并返回AgentResponse
        return ConvertServiceUtils.convertToAgentResponse(updatedAgent);
    }

    // FIXME: org.springframework.orm.ObjectOptimisticLockingFailureException: Row
    // was updated or deleted by another transaction (or unsaved-value mapping was
    // incorrect) : [com.bytedesk.service.agent.Agent#1]
    @Async
    public void updateConnect(String uid, boolean connected) {
        // 参数uid是userUid，非agent uid，所以无法直接更新
        agentRepository.updateConnectedByUid(connected, uid);
        // Optional<Agent> agentOptional = findByUserUid(uid);
        // agentOptional.ifPresent(agent -> {
        // agent.setConnected(connected);
        // save(agent);
        // });
    }

    @Cacheable(value = "agent", key = "#uid", unless = "#result == null")
    public Optional<Agent> findByUid(String uid) {
        return agentRepository.findByUid(uid);
    }

    @Cacheable(value = "agent", key = "#mobile", unless = "#result == null")
    public Optional<Agent> findByMobileAndOrgUid(String mobile, String orgUid) {
        return agentRepository.findByMobileAndOrgUidAndDeleted(mobile, orgUid, false);
    }

    @Cacheable(value = "agent", key = "#email", unless = "#result == null")
    public Optional<Agent> findByEmailAndOrgUid(String email, String orgUid) {
        return agentRepository.findByEmailAndOrgUidAndDeleted(email, orgUid, false);
    }

    @Cacheable(value = "agent", key = "#userUid", unless = "#result == null")
    // public Optional<Agent> findByUser_Uid(String userUid) {
    // return agentRepository.findByUser_Uid(userUid);
    // }
    public Optional<Agent> findByUserUidAndOrgUid(String userUid, String orgUid) {
        return agentRepository.findByUserUidAndOrgUidAndDeleted(userUid, orgUid, false);
    }

    // public Boolean existsByEmail(String email) {
    // return agentRepository.existsByEmailAndDeleted(email, false);
    // }

    // public Boolean existsByMobile(String mobile) {
    // return agentRepository.existsByMobileAndDeleted(mobile, false);
    // }

    public Boolean existsByUserUidAndOrgUid(String userUid, String orgUid) {
        return agentRepository.existsByUserUidAndOrgUidAndDeleted(userUid, orgUid, false);
    }

    @Caching(put = {
            @CachePut(value = "agent", key = "#agent.uid"),
            @CachePut(value = "agent", key = "#agent.mobile", unless = "#agent.mobile == null"),
            @CachePut(value = "agent", key = "#agent.email", unless = "#agent.email == null"),
    })
    public Agent save(Agent agent) {
        try {
            return agentRepository.save(agent);
        } catch (ObjectOptimisticLockingFailureException e) {
            // 乐观锁冲突处理逻辑
            handleOptimisticLockingFailureException(e, agent);
        }
        return null;
    }

    @CacheEvict(value = "agent", key = "#uid")
    public void deleteByUid(String uid) {
        agentRepository.updateDeletedByUid(true, uid);
        // Optional<Agent> agentOptional = findByUid(uid);
        // agentOptional.ifPresent(agent -> {
        // agent.setDeleted(true);
        // save(agent);
        // });
    }

    private static final int MAX_RETRY_ATTEMPTS = 3; // 设定最大重试次数
    private static final long RETRY_DELAY_MS = 5000; // 设定重试间隔（毫秒）
    private final Queue<Agent> retryQueue = new LinkedList<>();

    public void handleOptimisticLockingFailureException(ObjectOptimisticLockingFailureException e, Agent agent) {
        retryQueue.add(agent);
        processRetryQueue();
    }

    private void processRetryQueue() {
        while (!retryQueue.isEmpty()) {
            Agent agent = retryQueue.poll(); // 从队列中取出一个元素
            if (agent == null) {
                break; // 队列为空，跳出循环
            }

            int retryCount = 0;
            while (retryCount < MAX_RETRY_ATTEMPTS) {
                try {
                    // 尝试更新Topic对象
                    agentRepository.save(agent);
                    // 更新成功，无需进一步处理
                    log.info("Optimistic locking succeeded for agent: {}", agent.getUid());
                    break; // 跳出内部循环
                } catch (ObjectOptimisticLockingFailureException ex) {
                    // 捕获乐观锁异常
                    log.error("Optimistic locking failure for agent: {}, retry count: {}", agent.getUid(),
                            retryCount + 1);
                    // 等待一段时间后重试
                    try {
                        Thread.sleep(RETRY_DELAY_MS);
                    } catch (InterruptedException ie) {
                        Thread.currentThread().interrupt();
                        log.error("Interrupted while waiting for retry", ie);
                        return;
                    }
                    retryCount++; // 增加重试次数

                    // 如果还有重试机会，则将agent放回队列末尾
                    if (retryCount < MAX_RETRY_ATTEMPTS) {
                        // FIXME: 发现会一直失败，暂时不重复处理
                        // retryQueue.add(agent);
                    } else {
                        // 所有重试都失败了
                        handleFailedRetries(agent);
                    }
                }
            }
        }
    }

    private void handleFailedRetries(Agent agent) {
        String agentJSON = JSONObject.toJSONString(agent);
        ActionRequest actionRequest = ActionRequest.builder()
                .title("agent")
                .action("save")
                .description("All retry attempts failed for optimistic locking")
                .extra(agentJSON)
                .build();
        actionRequest.setType(TypeConsts.ACTION_TYPE_FAILED);
        bytedeskEventPublisher.publishActionEvent(actionRequest);
        log.error("All retry attempts failed for optimistic locking of agent: {}", agent.getUid());
        // 根据业务逻辑决定如何处理失败，例如通知用户稍后重试或执行其他操作
        // notifyUserOfFailure(agent);
    }

    public void initData() {

        if (agentRepository.count() > 0) {
            return;
        }

        String orgUid = UserConsts.DEFAULT_ORGANIZATION_UID;
        // 
        Optional<Member> memberOptional = memberService.findByMobileAndOrgUid(bytedeskProperties.getMobile(), orgUid);
        if (!memberOptional.isPresent()) {
            return;
        }
        Member member = memberOptional.get();
        // add agent
        AgentRequest agentRequest = AgentRequest.builder()
                .nickname(I18Consts.I18N_AGENT_NICKNAME)
                .email(member.getEmail())
                .mobile(member.getMobile())
                .password(bytedeskProperties.getPasswordDefault())
                .memberUid(member.getUid())
                .orgUid(orgUid)
                .build();
        agentRequest.setUid(UserConsts.DEFAULT_AGENT_UID);

        List<String> worktimeUids = new ArrayList<>();
        String worktimeUid = worktimeService.createDefault();
        worktimeUids.add(worktimeUid);
        agentRequest.getServiceSettings().setWorktimeUids(worktimeUids);

        create(agentRequest);
    }

}
