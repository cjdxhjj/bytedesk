/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-02-06 10:16:30
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-09-18 13:59:36
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license. 
 *  仅支持企业内部员工自用，严禁私自用于销售、二次销售或者部署SaaS方式销售 
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.service.agent;

import com.bytedesk.core.base.BaseRequest;
import com.bytedesk.core.constant.AvatarConsts;
import com.bytedesk.core.constant.I18Consts;
import com.bytedesk.kbase.auto_reply.AutoReplySettings;
import com.bytedesk.service.settings.ServiceSettingsRequest;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

@Data
@Builder
@Accessors(chain = true)
@EqualsAndHashCode(callSuper = false)
@AllArgsConstructor
@NoArgsConstructor
public class AgentRequest extends BaseRequest {

    @NotBlank
    private String nickname;
    // private String password;

    @Builder.Default
    private String avatar = AvatarConsts.DEFAULT_AGENT_AVATAR_URL;

    @NotBlank
    private String mobile;

    @NotBlank
    @Email(message = "email format error")
    private String email;

    @Builder.Default
    private String description = I18Consts.I18N_AGENT_DESCRIPTION;

    @Builder.Default
    // private AgentStatusEnum status = AgentStatusEnum.AVAILABLE;
    private String status = AgentStateEnum.AVAILABLE.name();

    @Builder.Default
    private Integer maxThreadCount = 10;

    @Builder.Default
    private Integer currentThreadCount = 0;

    @Builder.Default
    private ServiceSettingsRequest serviceSettings = new ServiceSettingsRequest();

    @Builder.Default
    private AutoReplySettings autoReplySettings = new AutoReplySettings();

    // @Builder.Default
    // private Boolean enabled = true;
    //
    @NotBlank
    private String memberUid;

}
