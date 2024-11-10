/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-11-05 16:58:18
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-11-05 16:58:22
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license. 
 *  仅支持企业内部员工自用，严禁私自用于销售、二次销售或者部署SaaS方式销售 
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.core.thread;

public class ThreadPermissions {

    public static final String THREAD_PREFIX = "THREAD_";
    // Thread permissions
    public static final String THREAD_CREATE = "hasAuthority('THREAD_CREATE')";
    public static final String THREAD_READ = "hasAuthority('THREAD_READ')";
    public static final String THREAD_UPDATE = "hasAuthority('THREAD_UPDATE')";
    public static final String THREAD_DELETE = "hasAuthority('THREAD_DELETE')";
    public static final String THREAD_EXPORT = "hasAuthority('THREAD_EXPORT')";


}
