/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-01-29 16:21:24
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-10-24 17:07:46
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license. 
 *  仅支持企业内部员工自用，严禁私自用于销售、二次销售或者部署SaaS方式销售 
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.service.visitor;

import com.bytedesk.core.base.BaseEntity;
import com.bytedesk.core.constant.AvatarConsts;
import com.bytedesk.core.enums.ClientEnum;
import com.bytedesk.core.enums.LanguageEnum;

import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

/**
 * visitor no need to login, without login can reduce the press of the database
 */
@Entity
@Data
@Builder
@Accessors(chain = true)
@EqualsAndHashCode(callSuper = false)
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "bytedesk_service_visitor")
public class VisitorEntity extends BaseEntity {

	private static final long serialVersionUID = 1L;
	
	/**
	 * developers can set basic visitor info
	 */
	private String nickname;

	@Builder.Default
	private String avatar = AvatarConsts.DEFAULT_VISITOR_AVATAR_URL;

    // private String description;

	// language
	@Builder.Default
	private String lang = LanguageEnum.ZH_CN.name();

	@Embedded
	private VisitorDevice device;

	// used for agent notation
	private String mobile;

	private String email;

	private String note;

	@Builder.Default
	private String client = ClientEnum.WEB.name();

	@Builder.Default
	private String status = VisitorStatusEnum.ONLINE.name();
	
}