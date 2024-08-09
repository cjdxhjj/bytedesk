/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-07-27 20:51:51
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-07-30 11:51:11
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license. 
 *  仅支持企业内部员工自用，严禁私自用于销售、二次销售或者部署SaaS方式销售 
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.kbase.config;

import org.springframework.ai.autoconfigure.vectorstore.redis.RedisVectorStoreProperties;
import org.springframework.ai.embedding.EmbeddingModel;
import org.springframework.ai.vectorstore.RedisVectorStore;
import org.springframework.ai.vectorstore.RedisVectorStore.MetadataField;
import org.springframework.ai.vectorstore.RedisVectorStore.RedisVectorStoreConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.bytedesk.core.config.JedisProperties;

import redis.clients.jedis.JedisPooled;

@Configuration
public class KbaseConfig {

        @Autowired
        private JedisProperties jedisProperties;

        @Bean
        @ConditionalOnProperty(name = "spring.ai.vectorstore.redis.initialize-schema", havingValue = "true")
        public RedisVectorStore vectorStore(EmbeddingModel embeddingModel, RedisVectorStoreProperties properties) {

                var kbUid = MetadataField.text(KbaseConst.KBASE_KB_UID);
                var fileUid = MetadataField.text(KbaseConst.KBASE_FILE_UID);
                
                var config = RedisVectorStoreConfig.builder()
                                .withIndexName(properties.getIndex())
                                .withPrefix(properties.getPrefix())
                                .withMetadataFields(kbUid, fileUid)
                                .build();
                //
                var jedis = new JedisPooled(jedisProperties.getHost(),
                                jedisProperties.getPort(),
                                null,
                                jedisProperties.getPassword());
                //
                return new RedisVectorStore(config,
                                embeddingModel,
                                jedis,
                                properties.isInitializeSchema());
        }

        // 使用pgvector存储向量, 报错
        // @Bean
        // public VectorStore vectorStore(EmbeddingModel embeddingModel, JdbcTemplate
        // jdbcTemplate) {
        // // FIXME: ERROR: column cannot have more than 2000 dimensions for hnsw index
        // return new PgVectorStore(jdbcTemplate, embeddingModel);
        // }

}