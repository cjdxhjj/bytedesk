/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-04-26 21:07:22
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-11-05 14:10:07
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license. 
 *  仅支持企业内部员工自用，严禁私自用于销售、二次销售或者部署SaaS方式销售 
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.core.channel;

import com.bytedesk.core.base.BaseResponse;

import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

@Data
@Builder
@Accessors(chain = true)
@EqualsAndHashCode(callSuper = false)
public class ChannelResponse extends BaseResponse {
    
    // private String cid;

    private String topic;

    // private String type;
    private String level;
    
    private String nickname;
    
    private String avatar;

    private String description;

    /** belong to org */
    // private String orgUid;
}
