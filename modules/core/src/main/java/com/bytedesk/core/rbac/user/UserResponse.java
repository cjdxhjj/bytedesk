/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-01-29 16:21:24
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-03-29 13:57:21
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license. 
 *  仅支持企业内部员工自用，严禁私自用于销售、二次销售或者部署SaaS方式销售 
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.core.rbac.user;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

// import java.util.Collection;
import java.util.List;

// import org.springframework.security.core.GrantedAuthority;

import com.bytedesk.core.rbac.role.RoleResponse;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class UserResponse {

    private String uid;
    private String username;
    private String nickname;
    private String email;
    private String mobile;
    private String avatar;
    private String description;
    //
    private List<RoleResponse> roles;
    private List<String> organizations;
}
