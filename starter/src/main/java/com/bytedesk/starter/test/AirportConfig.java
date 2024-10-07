/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-09-28 13:09:13
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-09-29 22:25:10
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license. 
 *  仅支持企业内部员工自用，严禁私自用于销售、二次销售或者部署SaaS方式销售 
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.starter.test;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Configuration
public class AirportConfig {

    @Bean
    public CommandLineRunner loadData(AirportsRepository repository) {
        return args -> {
            log.info("Loading airports...");
            repository.deleteAll();
            try (InputStream inputStream = getClass().getClassLoader().getResourceAsStream("data/airport_codes.csv");
                 BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream, StandardCharsets.UTF_8))) {
                
                String line;
                List<Airport> data = new ArrayList<>();
                while ((line = reader.readLine()) != null) {
                    String[] parts = line.split(",");
                    data.add(Airport.of(parts[0], parts[1], parts[2]));
                }
                repository.saveAll(data);
            } catch (IOException e) {
                log.error("Error loading airports", e);
            }
        };
    }

}