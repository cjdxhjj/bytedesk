/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-03-22 16:45:18
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-07-06 13:13:18
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license. 
 *  仅支持企业内部员工自用，严禁私自用于销售、二次销售或者部署SaaS方式销售 
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.ai.robot;

import com.bytedesk.ai.settings.RobotServiceSettings;
import com.bytedesk.core.base.BaseResponse;
import com.bytedesk.core.enums.LevelEnum;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@EqualsAndHashCode(callSuper = false)
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class RobotResponse extends BaseResponse {

    private String nickname;

    private String avatar;

    private String description;

    // private String type;
    private RobotTypeEnum type;

    private LevelEnum level;

    private Boolean published;

    private RobotServiceSettings serviceSettings;

    private RobotLlm llm;

    private String defaultReply;
}
