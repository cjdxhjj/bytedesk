/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-09-01 09:28:15
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-11-08 07:15:51
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license. 
 *  仅支持企业内部员工自用，严禁私自用于销售、二次销售或者部署SaaS方式销售 
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.core.notice;

import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bytedesk.core.base.BaseRestController;
import com.bytedesk.core.utils.JsonResult;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/v1/notice")
@AllArgsConstructor
public class NoticeController extends BaseRestController<NoticeRequest> {

    private NoticeService noticeService;

    @Override
    public ResponseEntity<?> queryByOrg(NoticeRequest request) {
        Page<NoticeResponse> page = noticeService.queryByOrg(request);
        return ResponseEntity.ok(JsonResult.success(page));
    }

    @Override
    public ResponseEntity<?> queryByUser(NoticeRequest request) {
        Page<NoticeResponse> page = noticeService.queryByUser(request);
        return ResponseEntity.ok(JsonResult.success(page));
    }

    @Override
    public ResponseEntity<?> create(NoticeRequest request) {
        NoticeResponse notice = noticeService.create(request);
        return ResponseEntity.ok(JsonResult.success(notice));
    }

    @Override
    public ResponseEntity<?> update(NoticeRequest request) {
        NoticeResponse notice = noticeService.update(request);
        return ResponseEntity.ok(JsonResult.success(notice));
    }

    @Override
    public ResponseEntity<?> delete(NoticeRequest request) {
        noticeService.delete(request);
        return ResponseEntity.ok(JsonResult.success());
    }
    
}
