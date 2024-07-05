/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-04-15 09:46:18
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-07-04 11:51:52
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


import java.util.Iterator;

// import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;
import org.springframework.util.SerializationUtils;

import com.bytedesk.core.config.BytedeskEventPublisher;
import com.bytedesk.core.rbac.user.User;
import com.bytedesk.core.topic.TopicUtils;
import com.bytedesk.core.utils.ApplicationContextHolder;
import com.bytedesk.team.department.Department;

import jakarta.persistence.PostPersist;
import jakarta.persistence.PostUpdate;
import lombok.extern.slf4j.Slf4j;

// @Async
@Slf4j
@Component
public class MemberEntityListener {

    // @PrePersist
    // public void prePersist(Member member) {
    //     log.info("prePersist {}", member.getUid());
    // }

    @PostPersist
    public void postPersist(Member member) {
        Member clonedMember = SerializationUtils.clone(member);
        User user = clonedMember.getUser();
        log.info("postPersist member {}, user {}", clonedMember.getUid(), user.getUid());
        // 
        BytedeskEventPublisher bytedeskEventPublisher = ApplicationContextHolder.getBean(BytedeskEventPublisher.class);
        // 默认订阅成员主题
        bytedeskEventPublisher.publishTopicCreateEvent(TopicUtils.getMemberTopic(clonedMember.getUid()), user.getUid());
        // 
        Iterator<Department> iterator = clonedMember.getDepartments().iterator();
        while (iterator.hasNext()) {
            Department department = iterator.next();
            // 订阅部门主题
            bytedeskEventPublisher.publishTopicCreateEvent(TopicUtils.getDepartmentTopic(department
                    .getUid()),
                    user.getUid());
        }
    }

    // @PreUpdate
    // public void preUpdate(Member member) {
    //     log.info("preUpdate {}", member.getUid());
    // }

    @PostUpdate
    public void postUpdate(Member member) {
        // log.info("postUpdate member {}", member.getUid());
        Member clonedMember = SerializationUtils.clone(member);
        User user = clonedMember.getUser();
        log.info("postUpdate member {}, user {}", clonedMember.getUid(), user.getUid());
        // TODO: 删除旧的部门主题
        BytedeskEventPublisher bytedeskEventPublisher = ApplicationContextHolder.getBean(BytedeskEventPublisher.class);
        Iterator<Department> iterator = clonedMember.getDepartments().iterator();
        while (iterator.hasNext()) {
            Department department = iterator.next();
            // 订阅部门主题
            bytedeskEventPublisher.publishTopicCreateEvent(TopicUtils.getDepartmentTopic(department
                    .getUid()),
                    user.getUid());
        }
    }

    // @PreRemove
    // public void preRemove(Member member) {
    //     log.info("preRemove {}", member.getUid());
    // }

    // @PostRemove
    // public void postRemove(Member member) {
    //     log.info("postRemove {}", member.getUid());
    // }
    
}
