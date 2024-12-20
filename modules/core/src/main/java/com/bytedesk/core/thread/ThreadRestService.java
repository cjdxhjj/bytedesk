/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-01-29 16:21:24
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-11-08 09:56:46
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license. 
 *  仅支持企业内部员工自用，严禁私自用于销售、二次销售或者部署SaaS方式销售 
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.core.thread;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cache.annotation.Caching;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.lang.NonNull;
import org.springframework.orm.ObjectOptimisticLockingFailureException;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.alibaba.fastjson2.JSON;
import com.bytedesk.core.base.BaseRestService;
import com.bytedesk.core.enums.ClientEnum;
import com.bytedesk.core.message.IMessageSendService;
import com.bytedesk.core.message.MessageProtobuf;
import com.bytedesk.core.message.MessageTypeEnum;
import com.bytedesk.core.message.MessageUtils;
import com.bytedesk.core.rbac.auth.AuthService;
import com.bytedesk.core.rbac.user.UserEntity;
import com.bytedesk.core.constant.BytedeskConsts;
import com.bytedesk.core.constant.I18Consts;
import com.bytedesk.core.rbac.user.UserProtobuf;
import com.bytedesk.core.rbac.user.UserUtils;
import com.bytedesk.core.topic.TopicUtils;
import com.bytedesk.core.uid.UidUtils;

import io.jsonwebtoken.lang.Arrays;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@AllArgsConstructor
public class ThreadRestService extends BaseRestService<ThreadEntity, ThreadRequest, ThreadResponse> {

    private final AuthService authService;

    private final ModelMapper modelMapper;

    private final ThreadRepository threadRepository;

    private final UidUtils uidUtils;

    private final IMessageSendService messageSendService;

    public Page<ThreadResponse> queryByOrg(ThreadRequest request) {

        // 优先加载最近更新的会话记录，updatedAt越大越新
        Pageable pageable = PageRequest.of(request.getPageNumber(), request.getPageSize(), Sort.Direction.DESC,
                "updatedAt");

        Specification<ThreadEntity> specs = ThreadSpecification.search(request);

        Page<ThreadEntity> threadPage = threadRepository.findAll(specs, pageable);

        return threadPage.map(this::convertToResponse);
    }

    /**  */
    public Page<ThreadResponse> query(ThreadRequest pageParam) {

        UserEntity user = authService.getCurrentUser();

        // 优先加载最近更新的会话记录，updatedAt越大越新
        Pageable pageable = PageRequest.of(pageParam.getPageNumber(), pageParam.getPageSize(), Sort.Direction.DESC,
                "updatedAt");

        Page<ThreadEntity> threadPage = findByOwner(user, pageable);

        return threadPage.map(this::convertToResponse);
    }

    /**
     * create thread
     * 同事会话、群聊会话
     * 
     * @{TopicUtils}
     * 
     * @param request
     * @return
     */
    public ThreadResponse create(ThreadRequest request) {

        UserEntity owner = authService.getCurrentUser();
        //
        Optional<ThreadEntity> threadOptional = findByTopicAndOwner(request.getTopic(), owner);
        if (threadOptional.isPresent()) {
            return convertToResponse(threadOptional.get());
        }
        //
        ThreadEntity thread = modelMapper.map(request, ThreadEntity.class);
        thread.setUid(uidUtils.getCacheSerialUid());
        thread.setState(ThreadStateEnum.STARTED.name());
        //
        String user = JSON.toJSONString(request.getUser());
        log.info("request {}, user {}", request.toString(), user);
        thread.setUser(user);
        //
        thread.setClient(ClientEnum.fromValue(request.getClient()).name());
        thread.setOwner(owner);
        thread.setOrgUid(owner.getOrgUid());
        //
        ThreadEntity savedThread = save(thread);
        if (savedThread == null) {
            throw new RuntimeException("thread save failed");
        }
        //
        return convertToResponse(savedThread);
    }


    
    // 在group会话创建之后，自动为group成员members创建会话
    // 同事群组会话：org/group/{group_uid}
    public ThreadResponse createGroupMemberThread(ThreadEntity thread, UserEntity owner) {
        //
        Optional<ThreadEntity> threadOptional = findByTopicAndOwner(thread.getTopic(), owner);
        if (threadOptional.isPresent()) {
            return convertToResponse(threadOptional.get());
        }

        ThreadEntity groupThread = ThreadEntity.builder()
                .type(thread.getType())
                .topic(thread.getTopic())
                .unreadCount(0)
                .state(thread.getState())
                .client(ClientEnum.SYSTEM.name())
                .user(thread.getUser())
                .owner(owner)
                .build();
        groupThread.setUid(uidUtils.getCacheSerialUid());
        groupThread.setOrgUid(thread.getOrgUid());

        ThreadEntity updateThread = save(groupThread);
        if (updateThread == null) {
            throw new RuntimeException("thread save failed");
        }

        return convertToResponse(updateThread);
    }

    /** 文件助手会话：file/{user_uid} */
    public ThreadResponse createFileAssistantThread(UserEntity user) {
        //
        String topic = TopicUtils.TOPIC_FILE_PREFIX + user.getUid();
        //
        Optional<ThreadEntity> threadOptional = findByTopicAndOwner(topic, user);
        if (threadOptional.isPresent()) {
            return convertToResponse(threadOptional.get());
        }

        UserProtobuf userSimple = UserUtils.getFileAssistantUser();
        //
        ThreadEntity assistantThread = ThreadEntity.builder()
                .type(ThreadTypeEnum.ASSISTANT.name())
                .topic(topic)
                .unreadCount(0)
                .state(ThreadStateEnum.STARTED.name())
                .client(ClientEnum.SYSTEM.name())
                .user(JSON.toJSONString(userSimple))
                .owner(user)
                .build();
        assistantThread.setUid(uidUtils.getCacheSerialUid());
        if (StringUtils.hasText(user.getOrgUid())) {
            assistantThread.setOrgUid(user.getOrgUid());
        } else {
            assistantThread.setOrgUid(BytedeskConsts.DEFAULT_ORGANIZATION_UID);
        }

        ThreadEntity updateThread = save(assistantThread);
        if (updateThread == null) {
            throw new RuntimeException("thread save failed");
        }

        return convertToResponse(updateThread);
    }

    // 系统通知会话：system/{user_uid}
    public ThreadResponse createSystemChannelThread(UserEntity user) {
        //
        // String topic = TopicUtils.TOPIC_SYSTEM_PREFIX + user.getUid();
        String topic = TopicUtils.getSystemTopic(user.getUid());
        //
        Optional<ThreadEntity> threadOptional = findByTopicAndOwner(topic, user);
        if (threadOptional.isPresent()) {
            return convertToResponse(threadOptional.get());
        }

        UserProtobuf userSimple = UserUtils.getSystemChannelUser();
        //
        ThreadEntity noticeThread = ThreadEntity.builder()
                .type(ThreadTypeEnum.CHANNEL.name())
                .topic(topic)
                .unreadCount(0)
                .state(ThreadStateEnum.STARTED.name())
                .client(ClientEnum.SYSTEM.name())
                .user(JSON.toJSONString(userSimple))
                .owner(user)
                .build();
        noticeThread.setUid(uidUtils.getCacheSerialUid());
        if (StringUtils.hasText(user.getOrgUid())) {
            noticeThread.setOrgUid(user.getOrgUid());
        } else {
            noticeThread.setOrgUid(BytedeskConsts.DEFAULT_ORGANIZATION_UID);
        }
        //
        ThreadEntity updateThread = save(noticeThread);
        if (updateThread == null) {
            throw new RuntimeException("thread save failed");
        }

        return convertToResponse(updateThread);
    }

    public ThreadResponse update(ThreadRequest threadRequest) {
        Optional<ThreadEntity> threadOptional = findByTopic(threadRequest.getTopic());
        if (!threadOptional.isPresent()) {
            throw new RuntimeException("update thread " + threadRequest.getTopic() + " not found");
        }
        //
        ThreadEntity thread = threadOptional.get();
        thread.setTop(threadRequest.getTop());
        thread.setUnread(threadRequest.getUnread());
        thread.setUnreadCount(threadRequest.getUnreadCount());
        thread.setMute(threadRequest.getMute());
        thread.setHide(threadRequest.getHide());
        thread.setStar(threadRequest.getStar());
        thread.setFolded(threadRequest.getFolded());
        thread.setContent(threadRequest.getContent());
        //
        ThreadEntity updateThread = save(thread);
        if (updateThread == null) {
            throw new RuntimeException("thread save failed");
        }
        return convertToResponse(updateThread);
    }

    public ThreadResponse autoClose(ThreadEntity thread) {
        // log.info(thread.getUid() + "自动关闭");
        ThreadRequest threadRequest = ThreadRequest.builder()
                .topic(thread.getTopic())
                .autoClose(true)
                .state(ThreadStateEnum.CLOSED.name())
                .build();
        return close(threadRequest);
    }

    public ThreadResponse close(ThreadRequest threadRequest) {
        Optional<ThreadEntity> threadOptional = findByTopic(threadRequest.getTopic());
        if (!threadOptional.isPresent()) {
            throw new RuntimeException("close thread " + threadRequest.getTopic() + " not found");
        }
        //
        ThreadEntity thread = threadOptional.get();
        if (ThreadStateEnum.CLOSED.name().equals(thread.getState())) {
            throw new RuntimeException("thread " + thread.getUid() + " is already closed");
        }
        thread.setAutoClose(threadRequest.getAutoClose());
        thread.setState(threadRequest.getState());
        //
        ThreadEntity updateThread = save(thread);
        if (updateThread == null) {
            throw new RuntimeException("thread save failed");
        }
        // 发布关闭消息, 通知用户
        String content = threadRequest.getAutoClose()
                ? I18Consts.I18N_AUTO_CLOSED
                : I18Consts.I18N_AGENT_CLOSED;
        MessageTypeEnum messageTypeEnum = threadRequest.getAutoClose() ? MessageTypeEnum.AUTO_CLOSED : MessageTypeEnum.AGENT_CLOSED;
        MessageProtobuf messageProtobuf = MessageUtils.createThreadMessage(uidUtils.getCacheSerialUid(), 
                updateThread,
                messageTypeEnum,
                content);
        // MessageUtils.notifyUser(messageProtobuf);
        messageSendService.sendProtobufMessage(messageProtobuf);
        //
        return convertToResponse(updateThread);
    }

    @Cacheable(value = "thread", key = "#uid", unless = "#result == null")
    public Optional<ThreadEntity> findByUid(@NonNull String uid) {
        return threadRepository.findByUid(uid);
    }

    public Boolean existsByUid(@NonNull String uid) {
        return threadRepository.existsByUid(uid);
    }

    @Cacheable(value = "thread", key = "#topic + '-' + #user.uid", unless = "#result == null")
    public Optional<ThreadEntity> findByTopicAndOwner(@NonNull String topic, UserEntity user) {
        return threadRepository.findByTopicAndOwnerAndDeleted(topic, user, false);
    }

    @Cacheable(value = "thread", key = "#topic", unless = "#result == null")
    public Optional<ThreadEntity> findByTopic(@NonNull String topic) {
        return threadRepository.findByTopicAndDeleted(topic, false);
    }

    // 找到某个访客当前对应某技能组未关闭会话
    @Cacheable(value = "thread", key = "#topic", unless = "#result == null")
    public Optional<ThreadEntity> findByTopicNotClosed(String topic) {
        List<String> states = Arrays.asList(new String[] { ThreadStateEnum.CLOSED.name()});
        return threadRepository.findTopicAndStatesNotInAndDeleted(topic, states, false);
    }

    // TODO: how to cacheput or cacheevict?
    @Cacheable(value = "thread", key = "#user.uid-#pageable.getPageNumber()", unless = "#result == null")
    public Page<ThreadEntity> findByOwner(UserEntity user, Pageable pageable) {
        return threadRepository.findByOwnerAndHideAndDeleted(user, false, false, pageable);
    }

    // TODO: 更新缓存
    // @Cacheable(value = "threadOpen")
    public List<ThreadEntity> findStateOpen() {
        List<String> types = Arrays.asList(new String[] { ThreadTypeEnum.AGENT.name(), ThreadTypeEnum.WORKGROUP.name(),
                ThreadTypeEnum.KB.name() });
        List<String> states = Arrays .asList(new String[] { ThreadStateEnum.CLOSED.name()});
        return threadRepository.findByTypesInAndStatesNotInAndDeleted(types, states, false);
    }

    @Caching(put = {
            @CachePut(value = "thread", key = "#thread.uid"),
            @CachePut(value = "thread", key = "#thread.topic")
    })
    public ThreadEntity save(@NonNull ThreadEntity thread) {
        try {
            return threadRepository.save(thread);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    @Caching(evict = {
            @CacheEvict(value = "thread", key = "#thread.uid"),
            @CacheEvict(value = "thread", key = "#thread.topic")
    })
    public void delete(@NonNull ThreadRequest entity) {
        Optional<ThreadEntity> threadOptional = findByTopic(entity.getTopic());
        threadOptional.ifPresent(thread -> {
            thread.setDeleted(true);
            save(thread);
        });
    }

    public ThreadResponse convertToResponse(ThreadEntity thread) {
        ThreadResponse threadResponse = modelMapper.map(thread, ThreadResponse.class);
        //
        UserProtobuf user = JSON.parseObject(thread.getUser(), UserProtobuf.class);
        threadResponse.setUser(user);

        return threadResponse;
    }

    @Override
    public Page<ThreadResponse> queryByUser(ThreadRequest request) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'queryByUser'");
    }

    @Override
    public void deleteByUid(String uid) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteByUid'");
    }

    @Override
    public void handleOptimisticLockingFailureException(ObjectOptimisticLockingFailureException e, ThreadEntity entity) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'handleOptimisticLockingFailureException'");
    }

}
