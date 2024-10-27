/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-08-04 11:32:22
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-10-14 09:31:45
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license. 
 *  仅支持企业内部员工自用，严禁私自用于销售、二次销售或者部署SaaS方式销售 
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.core.assistant;

import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import com.bytedesk.core.rbac.user.UserEntity;
import com.bytedesk.core.rbac.user.UserCreateEvent;
import com.bytedesk.core.thread.ThreadService;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
@AllArgsConstructor
public class AssistantEventListener {

    private final ThreadService threadService;

    @EventListener
    public void onUserCreateEvent(UserCreateEvent event) {
        UserEntity user = event.getUser();
        log.info("assistant onUserCreateEvent: {}", user.getUid());
        // 
        // 每创建一个用户，自动给此用户生成一条文件助理的会话
        threadService.createFileAssistantThread(user);
    }
    
    
}
