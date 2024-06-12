/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-06-06 13:08:36
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-06-06 13:08:39
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

public enum RobotEmbedingEnum {
    M3E_BASE("m3e-base");


    // private final String name;
    private final String value;

    RobotEmbedingEnum(String value) {
        // this.name = name;
        this.value = value;
    }

    // public String getName() {
    // return name;
    // }

    // 获取枚举常量的整型值
    public String getValue() {
        return value;
    }

    // 根据整型值查找对应的枚举常量
    public static RobotEmbedingEnum fromValue(String value) {
        for (RobotEmbedingEnum type : RobotEmbedingEnum.values()) {
            if (type.getValue().equalsIgnoreCase(value)) {
                return type;
            }
        }
        throw new IllegalArgumentException("No RobotEmbedingEnum constant with value " + value);
    }
}