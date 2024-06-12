/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-04-25 15:42:01
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-05-29 12:07:41
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license. 
 *  仅支持企业内部员工自用，严禁私自用于销售、二次销售或者部署SaaS方式销售 
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.core.push;

import com.bytedesk.core.base.BaseRequest;
import com.bytedesk.core.constant.BdConstants;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

/**
 * 
 */
@Data
@Builder
@Accessors(chain = true)
@EqualsAndHashCode(callSuper = false)
@AllArgsConstructor
@NoArgsConstructor
public class PushRequest extends BaseRequest {
    
    private static final long serialVersionUID = 1L;
            
    private String sender;
    
    private String receiver;

    private String ip;

    // according to ip address
    private String ipLocation;

    @Builder.Default
    // private String status = StatusConsts.CODE_STATUS_PENDING;
    private PushStatus status = PushStatus.PENDING;

    @Builder.Default
	private String platform = BdConstants.PLATFORM_BYTEDESK;
}
