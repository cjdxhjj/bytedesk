/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-09-27 14:58:12
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-10-15 17:46:42
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license. 
 *  仅支持企业内部员工自用，严禁私自用于销售、二次销售或者部署SaaS方式销售 
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.ai.provider.ollama;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agentsflex.core.llm.Llm;
import com.agentsflex.core.message.AiMessage;
import com.agentsflex.core.message.MessageStatus;
import com.agentsflex.llm.ollama.OllamaLlm;
import com.agentsflex.llm.ollama.OllamaLlmConfig;
import com.alibaba.fastjson2.JSON;
import com.bytedesk.ai.robot.RobotLlm;
import com.bytedesk.core.message.IMessageSendService;
import com.bytedesk.core.message.MessageProtobuf;
import com.bytedesk.core.message.MessageTypeEnum;
// import com.bytedesk.core.message.MessageUtils;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class OllamaService {

    @Autowired
    private IMessageSendService messageSendService;

    public void sendSseMessage(String query, RobotLlm robotllm, MessageProtobuf messageProtobuf) {
        //
        String prompt = robotllm.getPrompt() + "\n" + query;
        // Llm llm = Ollama
        OllamaLlmConfig config = new OllamaLlmConfig();
        config.setEndpoint("http://localhost:11434");
        config.setModel("qwen:7b");
        config.setDebug(true);

        Llm llm = new OllamaLlm(config);
        llm.chatStream(prompt, (context, response) -> {
            // {"content":"有一","fullContent":"有一","messageContent":"有一","status":"MIDDLE"}
            // {"completionTokens":11,"content":"","fullContent":"有一只深海鱼，每天都自由地游来游去，但它却一点也不开心。\n为什么呢？\n因为它压力很大。","messageContent":"有一只深海鱼，每天都自由地游来游去，但它却一点也不开心。\n为什么呢？\n因为它压力很大。","status":"END","totalTokens":27}
            log.info(JSON.toJSONString(response.getMessage()));
            // AiMessage aiMessage = response.getMessage();
        });
    }

    public void sendWsMessage(String query, RobotLlm robotllm, MessageProtobuf messageProtobuf) {
        //
        String prompt = robotllm.getPrompt() + "\n" + query;
        // Llm llm = Ollama
        OllamaLlmConfig config = new OllamaLlmConfig();
        config.setEndpoint("http://localhost:11434");
        config.setModel("qwen:7b");
        config.setDebug(true);

        Llm llm = new OllamaLlm(config);
        llm.chatStream(prompt, (context, response) -> {
            // {"content":"有一","fullContent":"有一","messageContent":"有一","status":"MIDDLE"}
            // {"completionTokens":11,"content":"","fullContent":"有一只深海鱼，每天都自由地游来游去，但它却一点也不开心。\n为什么呢？\n因为它压力很大。","messageContent":"有一只深海鱼，每天都自由地游来游去，但它却一点也不开心。\n为什么呢？\n因为它压力很大。","status":"END","totalTokens":27}
            log.info(JSON.toJSONString(response.getMessage()));
            AiMessage aiMessage = response.getMessage();
            messageProtobuf.setType(MessageTypeEnum.STREAM);
            messageProtobuf.setContent(aiMessage.getContent());
            // MessageUtils.notifyUser(messageProtobuf);
            messageSendService.sendProtobufMessage(messageProtobuf);
            // 
            if (aiMessage.getStatus().equals(MessageStatus.END)) {
                log.info("aiMessage.getStatus() == END");
            }
        });
    }
    
}
