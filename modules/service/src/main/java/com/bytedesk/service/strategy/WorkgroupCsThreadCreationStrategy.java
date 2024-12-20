/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-07-15 15:58:23
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-11-08 15:48:55
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license. 
 *  仅支持企业内部员工自用，严禁私自用于销售、二次销售或者部署SaaS方式销售 
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.service.strategy;

import java.util.Optional;

import org.springframework.stereotype.Component;

import com.alibaba.fastjson2.JSON;
import com.bytedesk.ai.robot.RobotEntity;
import com.bytedesk.core.message.IMessageSendService;
import com.bytedesk.core.message.MessageProtobuf;
import com.bytedesk.core.rbac.user.UserProtobuf;
import com.bytedesk.core.thread.ThreadRestService;
// import com.bytedesk.core.thread.ThreadStateService;
import com.bytedesk.core.topic.TopicUtils;
import com.bytedesk.service.counter.CounterResponse;
import com.bytedesk.service.counter.CounterService;
import com.bytedesk.service.counter_visitor.CounterVisitorService;
import com.bytedesk.service.route.IRouteService;
import com.bytedesk.service.utils.ConvertServiceUtils;
import com.bytedesk.service.visitor.VisitorRequest;
import com.bytedesk.service.visitor_thread.VisitorThreadService;
import com.bytedesk.service.workgroup.WorkgroupEntity;

import com.bytedesk.service.workgroup.WorkgroupService;

import jakarta.annotation.Nonnull;

import com.bytedesk.core.thread.ThreadEntity;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

// 技能组会话
@Slf4j
@Component("workgroupCsThreadStrategy")
@AllArgsConstructor
public class WorkgroupCsThreadCreationStrategy implements CsThreadCreationStrategy {

    private final WorkgroupService workgroupService;

    private final ThreadRestService threadService;

    private final VisitorThreadService visitorThreadService;

    private final IRouteService routeService;

    private final IMessageSendService messageSendService;

    private final CounterService counterService;

    private final CounterVisitorService counterVisitorService;

    @Override
    public MessageProtobuf createCsThread(VisitorRequest visitorRequest) {
        return createWorkgroupCsThread(visitorRequest);
    }

    public MessageProtobuf createWorkgroupCsThread(VisitorRequest visitorRequest) {
        //
        String workgroupUid = visitorRequest.getSid();
        String topic = TopicUtils.formatOrgWorkgroupThreadTopic(workgroupUid, visitorRequest.getUid());
        // 是否已经存在会话
        Optional<ThreadEntity> threadOptional = threadService.findByTopic(topic);
        // 存在会话，且未关闭
        if (threadOptional.isPresent() && !threadOptional.get().isClosed() && !visitorRequest.getForceAgent()) {
            log.info("Already have a processing thread {}", topic);
            return getWorkgroupProcessingMessage(visitorRequest, threadOptional.get());
        }
        //
        WorkgroupEntity workgroup = workgroupService.findByUid(workgroupUid)
                .orElseThrow(() -> new RuntimeException("Workgroup uid " + workgroupUid + " not found"));
        // 
        String orgUid = visitorRequest.getOrgUid();
        String visitor = ConvertServiceUtils.convertToUserProtobufJSONString(visitorRequest);
        CounterResponse counter = counterService.getNumber(orgUid, topic, visitor);
        counterVisitorService.saveNumber(orgUid, topic, counter.getCurrentNumber(), visitor);
        log.info("counter topic: {}, count {}", topic, counter.getCurrentNumber());
        //
        ThreadEntity thread = null;
        if (threadOptional.isPresent()) {
            // 存在会话，且已经关闭
            thread = threadOptional.get();
            thread.reInit();
        } else {
            // 不存在会话，创建会话
            thread = visitorThreadService.createWorkgroupThread(visitorRequest, workgroup, topic);
        }
        thread = visitorThreadService.reinitWorkgroupThreadExtra(visitorRequest, thread, workgroup);
        // 
        thread.setSerialNumber(counter.getCurrentNumber());
        // 未强制转人工的情况下，判断是否转机器人
        if (!visitorRequest.getForceAgent()) {
            Boolean isOffline = !workgroup.isConnected();
            Boolean transferToRobot = workgroup.getServiceSettings().shouldTransferToRobot(isOffline);
            if (transferToRobot) {
                // 转机器人
                // 将robot设置为agent
                RobotEntity robot = workgroup.getServiceSettings().getRobot();
                return routeService.routeRobot(visitorRequest, thread, robot);
            }
        }
        // 
        return routeService.routeWorkgroup(visitorRequest, thread, workgroup);
    }

    // Q-原样返回会话
    private MessageProtobuf getWorkgroupProcessingMessage(VisitorRequest visitorRequest, @Nonnull ThreadEntity thread) {
        //
        UserProtobuf user = JSON.parseObject(thread.getAgent(), UserProtobuf.class);
        log.info("getWorkgroupProcessingMessage user: {}, agent {}", user.toString(), thread.getAgent());
        //
        MessageProtobuf messageProtobuf = ThreadMessageUtil.getThreadContinueMessage(user, thread);
        // 微信公众号等渠道不能重复推送”继续会话“消息
        if (!visitorRequest.isWeChat()) {
            // 广播消息，由消息通道统一处理
            messageSendService.sendProtobufMessage(messageProtobuf);
        }
        // 
        return messageProtobuf;
    }


}
