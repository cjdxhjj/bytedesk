/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-06-29 13:00:33
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-07-03 09:27:37
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license. 
 *  仅支持企业内部员工自用，严禁私自用于销售、二次销售或者部署SaaS方式销售 
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.service.visitor_thread;

import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import com.bytedesk.core.thread.ThreadCreateEvent;
import com.bytedesk.core.thread.ThreadUpdateEvent;
import com.bytedesk.core.thread.Thread;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
@AllArgsConstructor
public class VisitorThreadEventListener {

    // private final VisitorThreadService visitorThreadService;

    @EventListener
    public void onThreadCreateEvent(ThreadCreateEvent event) {
        Thread thread = event.getThread();
        log.info("visitor ThreadCreateEvent: {}", thread.getUid());

        // 仅同步客服会话
        // if (thread.getType().equals(ThreadTypeEnum.AGENT)
        //         || thread.getType().equals(ThreadTypeEnum.WORKGROUP)) {
        //     visitorThreadService.create(event.getThread());
        // }
    }

    @EventListener
    public void onThreadUpdateEvent(ThreadUpdateEvent event) {
        // log.info("onThreadUpdateEvent: {}", event.getThread().getUid());

        // TODO: 更新visitor_thread表
        // visitorThreadService.update(event.getThread());

    }

}