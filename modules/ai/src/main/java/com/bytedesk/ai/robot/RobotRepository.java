/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-03-22 16:44:54
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-09-24 16:26:05
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

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import io.swagger.v3.oas.annotations.tags.Tag;

/**
 *
 */
@Repository
@Tag(name = "robot info")
// @PreAuthorize("hasRole('ROLE_ADMIN')")
public interface RobotRepository extends JpaRepository<RobotEntity, Long>, JpaSpecificationExecutor<RobotEntity> {

    Optional<RobotEntity> findByUid(String uid);
    // Boolean existsByNicknameAndLevel(String nickname, String level);
    Boolean existsByUidAndDeleted(String uid, Boolean deleted);

    Boolean existsByNicknameAndOrgUidAndDeleted(String nickname, String orgUid, Boolean deleted);
}
