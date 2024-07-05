/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-06-29 11:46:56
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-06-29 11:50:33
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license. 
 *  仅支持企业内部员工自用，严禁私自用于销售、二次销售或者部署SaaS方式销售 
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.core.action;

public enum ActionTypeEnum {
    LOG("log"),
    FAILED("failed"),
    VISITOR("visitor");

    private final String value;

    ActionTypeEnum(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    // 根据字符串查找对应的枚举常量
    public static ActionTypeEnum fromValue(String value) {
        for (ActionTypeEnum type : ActionTypeEnum.values()) {
            if (type.getValue().equalsIgnoreCase(value)) {
                return type;
            }
        }
        throw new IllegalArgumentException("No ActionTypeEnum constant with value: " + value);
    }
}
