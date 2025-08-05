package com.ssdam.tripPaw.member;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.view.RedirectView;

import com.ssdam.tripPaw.domain.Member;
import com.ssdam.tripPaw.member.util.JwtProvider;
import com.ssdam.tripPaw.member.util.RedisUtil;

import lombok.RequiredArgsConstructor;


@Controller
@RequiredArgsConstructor
public class AuthEamilController {
	private final JwtProvider jwtProvider;
	private final MemberService memberService;
	private final RedisUtil redisUtil;
	@GetMapping("/api/auth/resEmail")
	public RedirectView resEmail(@RequestParam String token) {
		boolean isSuccess = true;
		
		String userEmail = jwtProvider.getUsername(token);
		System.out.println("userEmail:"+userEmail);
		
		boolean isExist = redisUtil.existData(userEmail);
		
		if(isExist == false) {
			isSuccess = false;
		}
//		if(member == null && member.getEmail() == null) {
//			isSuccess = false;
//		}
		String redirectUrl = "http://localhost:3000/member/auth/authResultPage?success="+isSuccess+"&token="+token;
		//String redirectUrl = 
		return new RedirectView(redirectUrl);
	}
}
