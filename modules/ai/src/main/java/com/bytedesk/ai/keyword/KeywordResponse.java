/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-07-06 10:05:38
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-07-06 11:53:26
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license. 
 *  仅支持企业内部员工自用，严禁私自用于销售、二次销售或者部署SaaS方式销售 
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.ai.keyword;

import java.util.Date;

import com.bytedesk.ai.robot.RobotResponse;
import com.bytedesk.core.base.BaseResponse;
import com.bytedesk.core.category.CategoryResponse;
import com.bytedesk.core.message.MessageTypeEnum;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@EqualsAndHashCode(callSuper = true)
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class KeywordResponse extends BaseResponse {
    
    // 可以存储多个关键词："关键词1|关键词2|关键词3"
    private String keyword;

    // 多个关键词可以匹配到同一个回复
    private String reply;
    
    private KeywordMatchEnum matchType;

    private MessageTypeEnum contentType;

    private Boolean enabled;
    
    private CategoryResponse category;
    
    private RobotResponse robot;

    private Date updatedAt; 
}
