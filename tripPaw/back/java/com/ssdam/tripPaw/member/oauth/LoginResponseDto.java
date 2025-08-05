package com.ssdam.tripPaw.member.oauth;

import lombok.Data;

@Data
public class LoginResponseDto {
	private String access_token;
	private String token_type;
	private String refresh_token;
	private String id_token;
	private int expries_in;
	private int refresh_token_exprires_in;
	private String scope;
}
