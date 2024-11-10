/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-02-06 09:55:51
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-08-29 18:05:57
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

import java.util.List;
import java.time.LocalDateTime;

import com.bytedesk.ai.robot.RobotProtobuf;
import com.bytedesk.core.base.BaseResponse;
import com.bytedesk.core.rbac.user.UserProtobuf;
import com.bytedesk.team.member.MemberResponseSimple;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

@Data
@Builder
@Accessors(chain = true)
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class GroupResponse extends BaseResponse {

    private String name;

    private String avatar;

    private String description;

    private Boolean showTopTip;

    private String topTip;

    private GroupTypeEnum type;

    private GroupStatusEnum status;

    private Boolean isExternal;

    private List<MemberResponseSimple> members;

    private List<UserProtobuf> admins;

    private List<RobotProtobuf> robots;

    private UserProtobuf creator;

    private LocalDateTime createdAt;
}
