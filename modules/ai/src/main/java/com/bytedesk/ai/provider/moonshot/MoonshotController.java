/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-08-19 21:16:26
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-08-28 09:29:23
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license. 
 *  仅支持企业内部员工自用，严禁私自用于销售、二次销售或者部署SaaS方式销售 
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.ai.provider.moonshot;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

/**
 * 
 */
@RestController
@RequestMapping("/visitor/api/v1/moonshot")
@AllArgsConstructor
public class MoonshotController {

    // private final MoonshotChatModel chatModel;

    // // http://127.0.0.1:9003/visitor/api/v1/moonshot/chat
    // @GetMapping("/chat")
    // public ResponseEntity<?> generation(
    // @RequestParam(value = "message", defaultValue = "Tell me a joke") String
    // message) {
    // String response = chatModel.call(message);
    // return ResponseEntity.ok(JsonResult.success(response));
    // }

    // // http://127.0.0.1:9003/visitor/api/v1/moonshot/ai/generateStream
    // @GetMapping("/ai/generateStream")
    // public Flux<ChatResponse> generateStream(@RequestParam(value = "message",
    // defaultValue = "Tell me a joke") String message) {
    // var prompt = new Prompt(new UserMessage(message));
    // return chatModel.stream(prompt);
    // }

}