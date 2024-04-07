/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-01-29 16:21:46
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-02-29 10:59:23
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

import com.bytedesk.socket.mqtt.util.ChannelUtils;
import io.netty.channel.Channel;
import io.netty.handler.codec.mqtt.*;
import lombok.extern.slf4j.Slf4j;

/**
 *
 * @author xiaper.io
 */
@Slf4j
public class PingReq {

    public void processPingReq(Channel channel, MqttMessage message) {
        // log.debug("processPingReq {}", message.toString());
        //
        String clientId = ChannelUtils.getClientId(channel);
        log.debug("PINGREQ - clientId: {}", clientId);
        
        MqttMessage pingRespMessage = MqttMessageFactory.newMessage(
                new MqttFixedHeader(MqttMessageType.PINGRESP, false, MqttQoS.AT_MOST_ONCE, false, 0),
                null,
                null);
        // PINGREQ - clientId: MQTT_FX_Client
        channel.writeAndFlush(pingRespMessage);
    }

}
