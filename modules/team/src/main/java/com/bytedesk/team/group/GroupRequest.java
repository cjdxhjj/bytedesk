/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-02-06 09:55:40
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-06-28 14:23:51
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license. 
 *  仅支持企业内部员工自用，严禁私自用于销售、二次销售或者部署SaaS方式销售 
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.team.group;

import java.util.ArrayList;
import java.util.List;

import com.bytedesk.core.base.BaseRequest;
import com.bytedesk.core.constant.AvatarConsts;
import com.bytedesk.core.constant.I18Consts;

import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

@Data
@Builder
@Accessors(chain = true)
@EqualsAndHashCode(callSuper = false)
public class GroupRequest extends BaseRequest {

    @Builder.Default
    private String name = I18Consts.I18N_GROUP_NAME;

    @Builder.Default
    private String avatar = AvatarConsts.DEFAULT_GROUP_AVATAR_URL;

    @Builder.Default
    private String description = I18Consts.I18N_GROUP_DESCRIPTION;

    @Builder.Default
    private Boolean showTopTip = false;

    private String topTip;

    @Builder.Default
    private GroupStatusEnum status = GroupStatusEnum.NORMAL;

    @Builder.Default
    private List<String> memberUids = new ArrayList<>();

    @Builder.Default
    private List<String> adminUids = new ArrayList<>();

    @Builder.Default
    private List<String> robotUids = new ArrayList<>();
}
