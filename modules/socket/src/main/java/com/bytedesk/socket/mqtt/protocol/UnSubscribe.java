/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-01-29 16:21:46
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-02-29 10:52:49
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license. 
 *  仅支持企业内部员工自用，严禁私自用于销售、二次销售或者部署SaaS方式销售 
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.socket.mqtt.protocol;

import io.netty.channel.Channel;
import io.netty.handler.codec.mqtt.*;
// import com.bytedesk.core.redis.RedisUserService;
import com.bytedesk.socket.mqtt.service.MqttSubscribeStoreService;
import com.bytedesk.socket.mqtt.util.ChannelUtils;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.util.List;

@Slf4j
@AllArgsConstructor
public class UnSubscribe {

    private final MqttSubscribeStoreService mqttSubscribeStoreService;

    // private final RedisUserService redisUserService;

    public void processUnSubscribe(Channel channel, MqttUnsubscribeMessage mqttUnsubscribeMessage) {
        // log.debug("processUnSubscribe {}", mqttUnsubscribeMessage.toString());
        //
        List<String> topicFilters = mqttUnsubscribeMessage.payload().topics();
        String clientId = ChannelUtils.getClientId(channel);
        log.info("unsubscribe clientId {}", clientId);
        // 用户clientId格式: uid/client
        // final String uid = clientId.split("/")[0];
        topicFilters.forEach(topicFilter -> {
            //
            mqttSubscribeStoreService.remove(topicFilter, clientId);
            // 移除缓存
            // redisUserService.removeTopic(uid, topicFilter);
            log.debug("UNSUBSCRIBE - clientId: {}, topicFilter: {}", clientId, topicFilter);
        });
        MqttUnsubAckMessage unsubAckMessage = (MqttUnsubAckMessage) MqttMessageFactory.newMessage(
                new MqttFixedHeader(MqttMessageType.UNSUBACK, false, MqttQoS.AT_MOST_ONCE, false, 0),
                MqttMessageIdVariableHeader.from(mqttUnsubscribeMessage.variableHeader().messageId()),
                null);
        channel.writeAndFlush(unsubAckMessage);
    }
}