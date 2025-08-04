package com.ssdam.tripPaw.member.oauth;

import com.ssdam.tripPaw.domain.Member;

import lombok.Data;

@Data
public class KakaoTokenDto {
	public boolean loginSuccess;
	public Member account;
}
