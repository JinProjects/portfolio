package com.ssdam.tripPaw.member.util;

import java.time.Duration;
import java.util.concurrent.TimeUnit;

import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.stereotype.Component;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class RedisUtil {
	
	private final StringRedisTemplate redisTemplate;
	//
	public void saveRefreshToken(String username, String refreshToken, long expirationMs) {
		redisTemplate.opsForValue().set(username, refreshToken, expirationMs,TimeUnit.MILLISECONDS);
	}
	//리프레쉬토큰 리턴
	public String getRefreshToken(String username) {
		return redisTemplate.opsForValue().get(username);
	}
	//리프레쉬토큰 삭제
	public void deleteRefreshToken(String username) {
		redisTemplate.delete(username);
	}
	
	public boolean existData(String key) {
		return Boolean.TRUE.equals(redisTemplate.hasKey(key));
	}
	
	public void setDataExpire(String key, String value, long duration) {
		ValueOperations<String, String> valueOperations = redisTemplate.opsForValue();
		Duration expireDuration = Duration.ofSeconds(duration);
		valueOperations.set(key, value, expireDuration);
	}
}
