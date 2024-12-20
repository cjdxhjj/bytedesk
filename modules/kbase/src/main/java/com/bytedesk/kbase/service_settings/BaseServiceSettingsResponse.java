/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-06-14 10:45:08
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-11-07 14:17:41
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license. 
 *  仅支持企业内部员工自用，严禁私自用于销售、二次销售或者部署SaaS方式销售 
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.kbase.service_settings;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.bytedesk.core.constant.I18Consts;
import com.bytedesk.core.enums.LanguageEnum;
import com.bytedesk.kbase.faq.FaqResponse;

import jakarta.persistence.MappedSuperclass;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
@MappedSuperclass
public class BaseServiceSettingsResponse {

    private LanguageEnum language = LanguageEnum.ZH_CN;

    private Boolean autoPop = false;

    private Boolean showTopTip = false;

    // show rate btn on chat toolbar
    private Boolean showRateBtn = false;

    private Integer rateMsgCount;

    private Boolean showPreForm = false;

    private String preForm;

    private Boolean showHistory = false;

    private boolean showCaptcha = false;

    private String topTip = I18Consts.I18N_TOP_TIP;

    private String welcomeTip = I18Consts.I18N_WELCOME_TIP;

    private String leavemsgTip = I18Consts.I18N_LEAVEMSG_TIP;

    /** auto close time in min - 默认自动关闭时间，单位分钟 */
    private Double autoCloseMin = Double.valueOf(25);

    // private Boolean showQuickButtons = true;
    // private List<QuickButtonResponse> quickButtons = new ArrayList<>();

    private Boolean showFaqs = true;
    private List<FaqResponse> faqs = new ArrayList<>();

    private Boolean showQuickFaqs = true;
    private List<FaqResponse> quickFaqs = new ArrayList<>();

    private Boolean showGuessFaqs = true;
    private List<FaqResponse> guessFaqs = new ArrayList<>();

    private Boolean showHotFaqs = true;
    private List<FaqResponse> hotFaqs = new ArrayList<>();

    private Boolean showShortcutFaqs = true;
    private List<FaqResponse> shortcutFaqs = new ArrayList<>();

    // 输入联想开关
    private Boolean showInputAssociation = true;
    private Boolean showLogo = true;

    // 有效日期
    private Date validateUntil;

}
