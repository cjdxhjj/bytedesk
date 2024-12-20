/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-06-05 15:39:22
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-10-23 23:56:19
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license. 
 *  仅支持企业内部员工自用，严禁私自用于销售、二次销售或者部署SaaS方式销售 
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.ai.provider.zhipuai;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicBoolean;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import com.alibaba.fastjson2.JSON;
import com.bytedesk.ai.robot.RobotEntity;
import com.bytedesk.ai.robot.RobotLlm;
import com.bytedesk.ai.robot.RobotMessage;
import com.bytedesk.ai.robot.RobotProtobuf;
import com.bytedesk.ai.robot.RobotTypeEnum;
import com.bytedesk.core.enums.ClientEnum;
import com.bytedesk.core.thread.ThreadEntity;
import com.bytedesk.core.message.IMessageSendService;
import com.bytedesk.core.message.MessageEntity;
import com.bytedesk.core.message.MessageProtobuf;
import com.bytedesk.core.message.MessageService;
import com.bytedesk.core.message.MessageStatusEnum;
import com.bytedesk.core.message.MessageTypeEnum;
// import com.bytedesk.core.message.MessageUtils;
import com.bytedesk.core.rbac.user.UserProtobuf;
import com.bytedesk.core.thread.ThreadRestService;
import com.bytedesk.core.uid.UidUtils;
import com.bytedesk.core.utils.JsonResult;
import com.bytedesk.core.utils.JsonResultCodeEnum;
import com.bytedesk.kbase.upload.UploadVectorStore;
import com.zhipu.oapi.ClientV4;
// import com.zhipu.oapi.Constants;
import com.zhipu.oapi.service.v4.model.ChatCompletionRequest;
import com.zhipu.oapi.service.v4.model.ChatMessage;
import com.zhipu.oapi.service.v4.model.ChatMessageAccumulator;
import com.zhipu.oapi.service.v4.model.ChatMessageRole;
import com.zhipu.oapi.service.v4.model.Choice;
import com.zhipu.oapi.service.v4.model.ModelApiResponse;
import com.zhipu.oapi.service.v4.model.ModelData;

import io.reactivex.Flowable;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * https://open.bigmodel.cn/dev/api#sdk_install
 * https://github.com/MetaGLM/zhipuai-sdk-java-v4
 * 
 * https://docs.spring.io/spring-ai/reference/api/chat/zhipuai-chat.html
 */
@Slf4j
@Service
@AllArgsConstructor
public class ZhipuaiService {

    private final ZhipuaiConfig zhipuaiConfig;

    private final ClientV4 client;

    private final UidUtils uidUtils;

    private final ThreadRestService threadService;

    private final ModelMapper modelMapper;

    private final MessageService messageService;

    private final UploadVectorStore uploadVectorStore;

    private final IMessageSendService messageSendService;

    // private final BytedeskEventPublisher bytedeskEventPublisher;

    private final String PROMPT_BLUEPRINT = """
            根据提供的文档信息回答问题，文档信息如下:
            {context}
            问题:
            {query}
            当用户提出的问题无法根据文档内容进行回复或者你也不清楚时，回复:未查找到相关问题答案.
            """;
    /**
     * sse调用
     */
    public void getSseAnswer(String uid, String sid, String question, SseEmitter emitter) {
        String topic = sid + "/" + uid;
        ThreadEntity thread = threadService.findByTopic(topic)
                .orElseThrow(() -> new RuntimeException("thread with topic: " + topic + " not found"));

        RobotMessage robotMessage = RobotMessage.builder().question(question).build();

        RobotProtobuf robotSimple = JSON.parseObject(thread.getAgent(), RobotProtobuf.class);
        log.info("robotSimple {}", robotSimple);

        UserProtobuf user = modelMapper.map(thread.getAgent(), UserProtobuf.class);
        //
        String messageUid = uidUtils.getCacheSerialUid();
        MessageEntity message = MessageEntity.builder()
                .type(MessageTypeEnum.ROBOT.name())
                .status(MessageStatusEnum.SUCCESS.name())
                .client(ClientEnum.SYSTEM.name())
                .user(JSON.toJSONString(user))
                .build();
        message.setUid(messageUid);
        message.setOrgUid(thread.getOrgUid());
        //
        message.setThreadTopic(thread.getTopic());

        if (!robotSimple.getLlm().isEnabled()) {
            // 机器人未开启
            message.setContent(JsonResultCodeEnum.ROBOT_DISABLED.getName());
            try {
                emitter.send(SseEmitter.event()
                        .data(JsonResult.success(
                                JsonResultCodeEnum.ROBOT_DISABLED.getName(),
                                JsonResultCodeEnum.ROBOT_DISABLED.getValue(), message)));
            } catch (IOException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
            // 完成后完成SSE流
            emitter.complete();

            return;
        }

        //
        List<ChatMessage> messages = new ArrayList<>();
        ChatMessage chatMessage = new ChatMessage(ChatMessageRole.USER.value(), question);
        messages.add(chatMessage);

        ChatCompletionRequest chatCompletionRequest = ChatCompletionRequest.builder()
                // 模型名称
                // .model(Constants.ModelChatGLM3TURBO)
                .model(robotSimple.getLlm().getModel())
                .temperature(robotSimple.getLlm().getTemperature())
                .topP(robotSimple.getLlm().getTopP())
                .stream(Boolean.TRUE)
                .messages(messages)
                .requestId(messageUid)
                .build();
        //
        ModelApiResponse sseModelApiResp = client.invokeModelApi(chatCompletionRequest);
        if (sseModelApiResp.isSuccess()) {
            AtomicBoolean isFirst = new AtomicBoolean(true);
            List<Choice> choices = new ArrayList<>();
            ChatMessageAccumulator chatMessageAccumulator = mapStreamToAccumulator(sseModelApiResp.getFlowable())
                    .doOnNext(accumulator -> {
                        {
                            if (isFirst.getAndSet(false)) {
                                log.info("answer start: ");
                                robotMessage.clearAnswer();
                                message.setContent(JsonResultCodeEnum.ROBOT_ANSWER_START.getName());
                                emitter.send(SseEmitter.event().data(JsonResult.success(
                                        JsonResultCodeEnum.ROBOT_ANSWER_START.getName(),
                                        JsonResultCodeEnum.ROBOT_ANSWER_START.getValue(), message)));
                            }
                            if (accumulator.getDelta() != null && accumulator.getDelta().getTool_calls() != null) {
                                String jsonString = JSON.toJSONString(accumulator.getDelta().getTool_calls());
                                log.info("tool_calls: " + jsonString);
                            }
                            if (accumulator.getDelta() != null && accumulator.getDelta().getContent() != null) {
                                String answerContent = accumulator.getDelta().getContent();
                                // delta {"role":"assistant","content":"告诉我","tool_calls":[]} answerContent 告诉我
                                robotMessage.appendAnswer(answerContent);
                                message.setContent(JSON.toJSONString(robotMessage));
                                log.info("delta {} answerContent {}", accumulator.getDelta().toString(), answerContent);
                                emitter.send(SseEmitter.event().data(JsonResult.success(
                                        JsonResultCodeEnum.ROBOT_ANSWER_CONTINUE.getName(),
                                        JsonResultCodeEnum.ROBOT_ANSWER_CONTINUE.getValue(), message)));
                            }
                        }
                    })
                    .doOnComplete(() -> {
                        log.info("answer end");
                        message.setContent(JsonResultCodeEnum.ROBOT_ANSWER_END.getName());
                        emitter.send(SseEmitter.event().data(JsonResult.success(
                                JsonResultCodeEnum.ROBOT_ANSWER_END.getName(),
                                JsonResultCodeEnum.ROBOT_ANSWER_END.getValue(), message)));
                        // 完成后完成SSE流
                        emitter.complete();
                    })
                    .lastElement()
                    .blockingGet();

            ModelData data = new ModelData();
            data.setChoices(choices);
            data.setUsage(chatMessageAccumulator.getUsage());
            data.setId(chatMessageAccumulator.getId());
            data.setCreated(chatMessageAccumulator.getCreated());
            data.setRequestId(chatCompletionRequest.getRequestId());
            sseModelApiResp.setFlowable(null);// 打印前置空
            sseModelApiResp.setData(data);
            // 存储到数据库
            robotMessage.setPromptTokens(chatMessageAccumulator.getUsage().getPromptTokens());
            robotMessage.setCompletionTokens(chatMessageAccumulator.getUsage().getCompletionTokens());
            robotMessage.setTotalTokens(chatMessageAccumulator.getUsage().getTotalTokens());
            //
            message.setContent(JSON.toJSONString(robotMessage));
            messageService.save(message);
        }

        String result = JSON.toJSONString(sseModelApiResp);
        // sse output:
        // {"code":200,"data":{"array":false,"bigDecimal":false,"bigInteger":false,"binary":false,"boolean":false,"choices":[],
        // "containerNode":true,"created":1717580268,"double":false,"empty":false,"float":false,"floatingPointNumber":false,
        // "id":"8718088513501356715","int":false,"integralNumber":false,"long":false,"missingNode":false,"nodeType":"OBJECT",
        // "null":false,"number":false,"object":true,"pojo":false,"request_id":"bytedesk-1717580267785","short":false,
        // "textual":false,"usage":{"completion_tokens":28,"prompt_tokens":6,"total_tokens":34},"valueNode":false},"success":true}
        log.info("sse output:" + result);
    }

    /**
     * websocket 发送消息
     * LLM 聊天
     */
    public void sendWsMessage(String query, RobotLlm robotLlm, MessageProtobuf messageProtobuf) {
        //
        String prompt = robotLlm.getPrompt() + "\n" + query;
        //
        List<ChatMessage> messages = new ArrayList<>();
        ChatMessage chatMessage = new ChatMessage(ChatMessageRole.USER.value(), prompt);
        messages.add(chatMessage);
        //
        ChatCompletionRequest chatCompletionRequest = ChatCompletionRequest.builder()
                .model(robotLlm.getModel())
                .stream(Boolean.TRUE)
                .messages(messages)
                .requestId(messageProtobuf.getUid())
                .build();
        //
        ModelApiResponse sseModelApiResp = client.invokeModelApi(chatCompletionRequest);
        if (sseModelApiResp.isSuccess()) {
            AtomicBoolean isFirst = new AtomicBoolean(true);
            List<Choice> choices = new ArrayList<>();
            ChatMessageAccumulator chatMessageAccumulator = mapStreamToAccumulator(sseModelApiResp.getFlowable())
                    .doOnNext(accumulator -> {
                        {
                            if (isFirst.getAndSet(false)) {
                                log.info("answer start: ");
                            }
                            if (accumulator.getDelta() != null && accumulator.getDelta().getTool_calls() != null) {
                                String jsonString = JSON.toJSONString(accumulator.getDelta().getTool_calls());
                                log.info("tool_calls: " + jsonString);
                            }
                            if (accumulator.getDelta() != null && accumulator.getDelta().getContent() != null) {
                                String answerContent = accumulator.getDelta().getContent();
                                log.info("answerContent {}", answerContent);
                                if (StringUtils.hasText(answerContent)) {
                                    messageProtobuf.setType(MessageTypeEnum.STREAM);
                                    messageProtobuf.setContent(answerContent);
                                    //
                                    // MessageUtils.notifyUser(messageProtobuf);
                                    messageSendService.sendProtobufMessage(messageProtobuf);
                                }
                            }
                        }
                    })
                    .doOnComplete(() -> {
                        log.info("answer end");
                    })
                    .lastElement()
                    .blockingGet();

            ModelData data = new ModelData();
            data.setChoices(choices);
            data.setUsage(chatMessageAccumulator.getUsage());
            data.setId(chatMessageAccumulator.getId());
            data.setCreated(chatMessageAccumulator.getCreated());
            data.setRequestId(chatCompletionRequest.getRequestId());
            sseModelApiResp.setFlowable(null);// 打印前置空
            sseModelApiResp.setData(data);
            // 存储到数据库
            // robotMessage.setPromptTokens(chatMessageAccumulator.getUsage().getPromptTokens());
            // robotMessage.setCompletionTokens(chatMessageAccumulator.getUsage().getCompletionTokens());
            // robotMessage.setTotalTokens(chatMessageAccumulator.getUsage().getTotalTokens());
        }
        String result = JSON.toJSONString(sseModelApiResp);
        log.info("websocket output:" + result);
    }

    // 知识库问答
    public void sendWsKbMessage(String query, String kbUid, RobotEntity robot, MessageProtobuf messageProtobuf) {
        //
        String prompt = robot.getLlm().getPrompt();
        if (robot.getType().equals(RobotTypeEnum.SERVICE.name())
                || robot.getType().equals(RobotTypeEnum.KB.name())) {
            List<String> contentList = uploadVectorStore.searchText(query, kbUid);
            String context = String.join("\n", contentList);
            prompt = PROMPT_BLUEPRINT.replace("{context}", context).replace("{query}", query);
            log.info("sendWsRobotMessage prompt {}", prompt);
        } else {
            prompt = prompt + "\n" + query;
        }
        //
        List<ChatMessage> messages = new ArrayList<>();
        ChatMessage chatMessage = new ChatMessage(ChatMessageRole.USER.value(), prompt);
        messages.add(chatMessage);
        //
        ChatCompletionRequest chatCompletionRequest = ChatCompletionRequest.builder()
                // 模型名称
                .model(zhipuaiConfig.zhiPuAiApiModel)
                // .model(Constants.ModelChatGLM3TURBO)
                // .model(robotSimple.getLlm().getModel())
                // .temperature(robotSimple.getLlm().getTemperature())
                // .topP(robotSimple.getLlm().getTopP())
                .stream(Boolean.TRUE)
                .messages(messages)
                .requestId(messageProtobuf.getUid())
                .build();
        //
        ModelApiResponse sseModelApiResp = client.invokeModelApi(chatCompletionRequest);
        if (sseModelApiResp.isSuccess()) {
            AtomicBoolean isFirst = new AtomicBoolean(true);
            List<Choice> choices = new ArrayList<>();
            ChatMessageAccumulator chatMessageAccumulator = mapStreamToAccumulator(sseModelApiResp.getFlowable())
                    .doOnNext(accumulator -> {
                        {
                            if (isFirst.getAndSet(false)) {
                                log.info("answer start: ");
                            }
                            if (accumulator.getDelta() != null && accumulator.getDelta().getTool_calls() != null) {
                                String jsonString = JSON.toJSONString(accumulator.getDelta().getTool_calls());
                                log.info("tool_calls: " + jsonString);
                            }
                            if (accumulator.getDelta() != null && accumulator.getDelta().getContent() != null) {
                                String answerContent = accumulator.getDelta().getContent();
                                log.info("answerContent {}", answerContent);
                                if (StringUtils.hasText(answerContent)) {
                                    messageProtobuf.setType(MessageTypeEnum.STREAM);
                                    messageProtobuf.setContent(answerContent);
                                    //
                                    // MessageUtils.notifyUser(messageProtobuf);
                                    messageSendService.sendProtobufMessage(messageProtobuf);
                                }
                            }
                        }
                    })
                    .doOnComplete(() -> {
                        log.info("answer end");
                    })
                    .lastElement()
                    .blockingGet();

            ModelData data = new ModelData();
            data.setChoices(choices);
            data.setUsage(chatMessageAccumulator.getUsage());
            data.setId(chatMessageAccumulator.getId());
            data.setCreated(chatMessageAccumulator.getCreated());
            data.setRequestId(chatCompletionRequest.getRequestId());
            sseModelApiResp.setFlowable(null);// 打印前置空
            sseModelApiResp.setData(data);
            // 存储到数据库
            // robotMessage.setPromptTokens(chatMessageAccumulator.getUsage().getPromptTokens());
            // robotMessage.setCompletionTokens(chatMessageAccumulator.getUsage().getCompletionTokens());
            // robotMessage.setTotalTokens(chatMessageAccumulator.getUsage().getTotalTokens());
        }

        String result = JSON.toJSONString(sseModelApiResp);
        log.info("websocket output:" + result);
    }

    public void sendWsKbAutoReply(String query, String kbUid, MessageProtobuf messageProtobuf) {
        //
        List<String> contentList = uploadVectorStore.searchText(query, kbUid);
        String context = String.join("\n", contentList);
        String prompt = PROMPT_BLUEPRINT.replace("{context}", context).replace("{query}", query);
        log.info("sendWsAutoReply prompt {}", prompt);
        //
        List<ChatMessage> messages = new ArrayList<>();
        ChatMessage chatMessage = new ChatMessage(ChatMessageRole.USER.value(), prompt);
        messages.add(chatMessage);
        //
        ChatCompletionRequest chatCompletionRequest = ChatCompletionRequest.builder()
                // 模型名称
                .model(zhipuaiConfig.zhiPuAiApiModel)
                // .model(Constants.ModelChatGLM3TURBO)
                // .model(robotSimple.getLlm().getModel())
                // .temperature(robotSimple.getLlm().getTemperature())
                // .topP(robotSimple.getLlm().getTopP())
                .stream(Boolean.TRUE)
                .messages(messages)
                .requestId(messageProtobuf.getUid())
                .build();
        //
        ModelApiResponse sseModelApiResp = client.invokeModelApi(chatCompletionRequest);
        if (sseModelApiResp.isSuccess()) {
            AtomicBoolean isFirst = new AtomicBoolean(true);
            List<Choice> choices = new ArrayList<>();
            ChatMessageAccumulator chatMessageAccumulator = mapStreamToAccumulator(sseModelApiResp.getFlowable())
                    .doOnNext(accumulator -> {
                        {
                            if (isFirst.getAndSet(false)) {
                                log.info("answer start: ");
                            }
                            if (accumulator.getDelta() != null && accumulator.getDelta().getTool_calls() != null) {
                                String jsonString = JSON.toJSONString(accumulator.getDelta().getTool_calls());
                                log.info("tool_calls: " + jsonString);
                            }
                            if (accumulator.getDelta() != null && accumulator.getDelta().getContent() != null) {
                                String answerContent = accumulator.getDelta().getContent();
                                log.info("answerContent {}", answerContent);
                                if (StringUtils.hasText(answerContent)) {
                                    messageProtobuf.setType(MessageTypeEnum.STREAM);
                                    messageProtobuf.setContent(answerContent);
                                    //
                                    // MessageUtils.notifyUser(messageProtobuf);
                                    messageSendService.sendProtobufMessage(messageProtobuf);
                                }
                            }
                        }
                    })
                    .doOnComplete(() -> {
                        log.info("answer end");
                    })
                    .lastElement()
                    .blockingGet();

            ModelData data = new ModelData();
            data.setChoices(choices);
            data.setUsage(chatMessageAccumulator.getUsage());
            data.setId(chatMessageAccumulator.getId());
            data.setCreated(chatMessageAccumulator.getCreated());
            data.setRequestId(chatCompletionRequest.getRequestId());
            sseModelApiResp.setFlowable(null);// 打印前置空
            sseModelApiResp.setData(data);
            // 存储到数据库
            // robotMessage.setPromptTokens(chatMessageAccumulator.getUsage().getPromptTokens());
            // robotMessage.setCompletionTokens(chatMessageAccumulator.getUsage().getCompletionTokens());
            // robotMessage.setTotalTokens(chatMessageAccumulator.getUsage().getTotalTokens());
        }

        String result = JSON.toJSONString(sseModelApiResp);
        log.info("websocket output:" + result);

    }

    public static Flowable<ChatMessageAccumulator> mapStreamToAccumulator(Flowable<ModelData> flowable) {
        return flowable.map(chunk -> {
            return new ChatMessageAccumulator(chunk.getChoices().get(0).getDelta(), null, chunk.getChoices().get(0),
                    chunk.getUsage(), chunk.getCreated(), chunk.getId());
        });
    }

}
