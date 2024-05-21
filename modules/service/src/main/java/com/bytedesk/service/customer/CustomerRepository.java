/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-03-22 23:06:25
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-05-19 18:46:58
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license. 
 *  仅支持企业内部员工自用，严禁私自用于销售、二次销售或者部署SaaS方式销售 
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.service.customer;

import java.util.Collection;

// import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * https://docs.spring.io/spring-data/jpa/reference/repositories/projections.html
 */
public interface CustomerRepository extends //JpaRepository<Customer, Long> 
    CrudRepository<Customer, Long>,
    PagingAndSortingRepository<Customer, Long>,
    JpaSpecificationExecutor<Customer>
{

    Collection<CustomerNameOnly> findByName(String name);
    
    // swagger can't decide, Tweak configuration to get to unambiguous paths
    // using a dynamic projection parameter
    // <T> Collection<T> findByName(String name, Class<T> type);
}
