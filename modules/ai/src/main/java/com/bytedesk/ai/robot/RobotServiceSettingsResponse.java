/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-06-04 17:16:54
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-06-12 10:40:36
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

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.bytedesk.core.constant.I18Consts;
import com.bytedesk.core.quick_button.QuickButton;
import com.bytedesk.core.thread.ThreadTypeEnum;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.persistence.FetchType;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

@Data
@Builder
@Embeddable
@Accessors(chain = true)
@AllArgsConstructor
@NoArgsConstructor
public class RobotServiceSettingsResponse {

    @Builder.Default
    private String language = I18Consts.ZH_CN;

    @Builder.Default
    @Column(name = "is_auto_pop")
    private boolean autoPop = false;

    /**
     * TODO: set different tips for different lang
     */
    @Builder.Default
    private boolean showTopTip = false;

    @Builder.Default
    @Column(length = 512)
    private String topTip = I18Consts.I18N_TOP_TIP;

    @Builder.Default
    private String welcomeTip = I18Consts.I18N_WELCOME_TIP;

    @Builder.Default
    private String leavemsgTip = I18Consts.I18N_LEAVEMSG_TIP;

    /** auto close time in min - 默认自动关闭时间，单位分钟 */
    @Builder.Default
    private Double autoCloseMin = Double.valueOf(25);

    @Builder.Default
    @OneToMany(fetch = FetchType.LAZY)
    private List<QuickButton> quickButtons = new ArrayList<>();

    // 是否允许转人工
    @Builder.Default
    private boolean allowTransferToAgent = true;

    // 限制仅允许：workgroup、appointed
    @Builder.Default
    private ThreadTypeEnum transferType = ThreadTypeEnum.WORKGROUP;

    // agentUid or workgroupUid
    private String transferToUid;

    //
    @Builder.Default
    private boolean showLogo = true;
    // private String logoUrl;

    // 有效日期
    private Date validateUntil;
}
