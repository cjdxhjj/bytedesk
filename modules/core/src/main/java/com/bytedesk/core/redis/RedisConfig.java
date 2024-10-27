/*
 * @Author: jackning 270580156@qq.com
 * @Date: 2024-07-29 12:01:27
 * @LastEditors: jackning 270580156@qq.com
 * @LastEditTime: 2024-10-23 17:18:02
 * @Description: bytedesk.com https://github.com/Bytedesk/bytedesk
 *   Please be aware of the BSL license restrictions before installing Bytedesk IM – 
 *  selling, reselling, or hosting Bytedesk IM as a service is a breach of the terms and automatically terminates your rights under the license. 
 *  仅支持企业内部员工自用，严禁私自用于销售、二次销售或者部署SaaS方式销售 
 *  Business Source License 1.1: https://github.com/Bytedesk/bytedesk/blob/main/LICENSE 
 *  contact: 270580156@qq.com 
 *  联系：270580156@qq.com
 * Copyright (c) 2024 by bytedesk.com, All Rights Reserved. 
 */
package com.bytedesk.core.redis;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.RedisStandaloneConfiguration;
import org.springframework.data.redis.connection.jedis.JedisConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
// import org.springframework.data.redis.serializer.GenericJackson2JsonRedisSerializer;
import org.springframework.data.redis.serializer.JdkSerializationRedisSerializer;
import org.springframework.data.redis.serializer.StringRedisSerializer;

import redis.clients.jedis.JedisPool;
import redis.clients.jedis.JedisPoolConfig;

// https://docs.spring.io/spring-data/redis/reference/redis/getting-started.html
@Configuration
public class RedisConfig {

    @Autowired
    private JedisProperties jedisProperties;

    @Autowired
    private JedisPoolProperties jedisPoolProperties;
    
    // https://github.com/redis/jedis
    @Bean
    public JedisPoolConfig jedisPoolConfig() {
        JedisPoolConfig poolConfig = new JedisPoolConfig();
        poolConfig.setMaxIdle(jedisPoolProperties.getMaxIdle());
        poolConfig.setMaxTotal(jedisPoolProperties.getMaxTotal());
        poolConfig.setMinIdle(jedisPoolProperties.getMaxIdle());
        return poolConfig;
    }

    public JedisPool getJedisPool() {
        return new JedisPool(jedisPoolConfig(), jedisProperties.getHost(), jedisProperties.getPort());
    }

    // https://github.com/redis/jedis
    // https://docs.spring.io/spring-data/redis/reference/redis/connection-modes.html
    @Bean
    JedisConnectionFactory jedisConnectionFactory() {
        // TODO: add RedisSentinelConfiguration
        RedisStandaloneConfiguration redisStandaloneConfiguration = new RedisStandaloneConfiguration(
                jedisProperties.getHost(), jedisProperties.getPort());
        redisStandaloneConfiguration.setPassword(jedisProperties.getPassword());
        redisStandaloneConfiguration.setDatabase(jedisProperties.getDatabase());
        // 
        return new JedisConnectionFactory(redisStandaloneConfiguration);
    }

    @Bean
    public RedisTemplate<String, Object> redisTemplate() {
        RedisTemplate<String, Object> redisTemplate = new RedisTemplate<>();
        redisTemplate.setConnectionFactory(jedisConnectionFactory());
        // 
        // redisTemplate.setDefaultSerializer(new CustomRedisSerializer());
        redisTemplate.setKeySerializer(new StringRedisSerializer());
        // redisTemplate.setHashKeySerializer(new StringRedisSerializer());
        // redisTemplate.setValueSerializer(new CustomRedisSerializer());
        // redisTemplate.setHashValueSerializer(new CustomRedisSerializer());
        // 
        // redisTemplate.setValueSerializer(new GenericJackson2JsonRedisSerializer());
        redisTemplate.setValueSerializer(new JdkSerializationRedisSerializer());
        //         
        return redisTemplate;
    }


    
    /**
     * 序列化定制
     * 
     * @return
     */
    // @Bean
    // // // Jackson2JsonRedisSerializer<Object> jackson2JsonRedisSerializer
    // public GenericJackson2JsonRedisSerializer jackson2JsonSerializer() {
    //     // 初始化objectmapper
    //     ObjectMapper objectMapper = new ObjectMapper();
    //     objectMapper.setSerializationInclusion(Include.NON_NULL);
    //     objectMapper.activateDefaultTyping(
    //         LaissezFaireSubTypeValidator.instance , 
    //         ObjectMapper.DefaultTyping.NON_FINAL,
    //             JsonTypeInfo.As.WRAPPER_ARRAY);
    //     // 
    //     // return new Jackson2JsonRedisSerializer(objectMapper, Object.class);
    //     return new GenericJackson2JsonRedisSerializer(objectMapper);
    // }

    // /**
    //  * 操作模板
    //  * 
    //  * @param connectionFactory
    //  * @param jackson2JsonRedisSerializer
    //  * @return
    //  */
    // @Bean
    // // Jackson2JsonRedisSerializer<Object> jackson2JsonRedisSerializer
    // public RedisTemplate<String, Object> redisTemplate(RedisConnectionFactory connectionFactory,
    //         GenericJackson2JsonRedisSerializer jackson2JsonRedisSerializer) {

    //     RedisTemplate<String, Object> redisTemplate = new RedisTemplate<String, Object>();
    //     redisTemplate.setConnectionFactory(connectionFactory);

    //     // 设置key/hashkey序列化
    //     RedisSerializer<String> stringSerializer = new StringRedisSerializer();
    //     redisTemplate.setKeySerializer(stringSerializer);
    //     redisTemplate.setHashKeySerializer(stringSerializer);

    //     // 设置值序列化
    //     redisTemplate.setValueSerializer(jackson2JsonRedisSerializer);
    //     redisTemplate.setHashValueSerializer(jackson2JsonRedisSerializer);
    //     redisTemplate.afterPropertiesSet();

    //     return redisTemplate;
    // }

}
