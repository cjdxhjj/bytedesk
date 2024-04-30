/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-04-05 14:51:45
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-04-17 17:17:12
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

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;

/** 
 * filter blocked visitor
 */
@Slf4j
@Aspect
@Component
public class VisitorAspect {
    
    @Pointcut("execution(* com.bytedesk.service.visitor.VisitorController.*(..))")
    public void visitorLog() {};

    @Before("visitorLog()")
    public void beforeVisitorLog() {
        // TODO: 拦截骚扰用户 + 被禁ip/ip段
        log.debug("VisitorAspect TODO: 拦截骚扰用户 + 被禁ip/ip段");
    }

    // @After("visitorLog()")
    // public void afterVisitorLog() {
    //     log.debug("VisitorAspect afterVisitorLog");
    //     // TODO: action log save to db
    // }

    // @Around("visitorLog()")
    // public Object aroundVisitorLog(ProceedingJoinPoint joinPoint) throws Throwable {
    //     log.debug("VisitorAspect aroundVisitorLog before");

    //     long start = System.currentTimeMillis();

    //     // body
    //     Object result = joinPoint.proceed();
        
    //     long executionTime = System.currentTimeMillis() - start;

    //     log.debug("{} executed in {} ms", joinPoint.getSignature(), executionTime);
    
    //     log.debug("VisitorAspect aroundVisitorLog after");

    //     return result;
    // }


}
