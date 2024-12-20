/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-05-11 18:21:36
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-11-13 17:57:07
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license. 
 *  仅支持企业内部员工自用，严禁私自用于销售、二次销售或者部署SaaS方式销售 
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.core.category;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface CategoryRepository extends JpaRepository<CategoryEntity, Long>, JpaSpecificationExecutor<CategoryEntity> {
    Optional<CategoryEntity> findByUid(String uid);
    // 
    List<CategoryEntity> findByParentAndPlatformAndDeletedOrderByOrderNoAsc(CategoryEntity parent, String platform,
                    Boolean deleted);
            
    Optional<CategoryEntity> findByNameAndTypeAndOrgUidAndPlatformAndDeleted(String name, String type, String orgUid, String platform,
                    Boolean deleted);
            
    Optional<CategoryEntity> findByNameAndTypeAndLevelAndPlatformAndDeleted(String name, String type, String level, String platform,
            Boolean deleted);

    Optional<CategoryEntity> findByNameAndKbUidAndDeleted(String name, String kbUid, Boolean deleted);

    List<CategoryEntity> findByKbUidAndDeleted(String kbUid, Boolean deleted);

    Boolean existsByNameAndOrgUidAndDeletedFalse(String name, String orgUid);

    Boolean existsByUid(String uid);

//     List<Category> findByLevelAndDeleted(String level, Boolean deleted);

//     List<Category> findByLevelAndOrgUidAndDeleted(String level, String orgUid, Boolean deleted);

//     List<Category> findByLevelAndAgentUidAndDeleted(String level, String agentUid, Boolean deleted);
    
}
