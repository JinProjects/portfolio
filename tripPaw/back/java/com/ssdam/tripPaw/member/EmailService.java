package com.ssdam.tripPaw.member;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import com.ssdam.tripPaw.member.util.JwtProvider;
import com.ssdam.tripPaw.member.util.RedisUtil;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class EmailService {
	private final JavaMailSender javaMailSender;
	private final RedisUtil redisUtil;
	private static final String senderEmail = "during4277@naver.com";
	private final JwtProvider jwtProvider;
	
	public MimeMessage createEmailForm(String email) throws MessagingException {
		//String authCode = createCode();
		Authentication authentication = new UsernamePasswordAuthenticationToken(email, null);
		String token = jwtProvider.generateAccessToken(authentication);
		System.out.println("email=="+email);
		MimeMessage message = javaMailSender.createMimeMessage();
		message.addRecipients(MimeMessage.RecipientType.TO, email);
		message.setSubject("안녕하세요. tripPaw 인증메일입니다.");
		message.setFrom(senderEmail);
		message.setText("인증링크 입니다. <a href='http://localhost:8080/api/auth/resEmail?token="+token+"'>인증링크</a>","utf-8","html");
		
		redisUtil.setDataExpire(email, token , 60*60L);
		return message;
	}
	
	public void sendMail(String toEmail) throws MessagingException {
		if(redisUtil.existData(toEmail)) {
			redisUtil.deleteRefreshToken(toEmail);
		}
		MimeMessage emailForm = createEmailForm(toEmail);
		javaMailSender.send(emailForm);
	}
	
	
}
