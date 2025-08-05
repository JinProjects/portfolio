package com.ssdam.tripPaw.member;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.ssdam.tripPaw.domain.Member;

import lombok.RequiredArgsConstructor;

@SuppressWarnings("serial")
@RequiredArgsConstructor
public class MemberDetails implements UserDetails{
	
	private final Member member;
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return member.getUsername();
	}
	
	public String getEmail() {
		return member.getEmail();
	}
	
	public String getNickname() {
		return member.getNickname();
	}
	
	public String getZonecode() {
		return member.getZonecode();
	}
	
	public String getRoadAddress() {
		return member.getRoadAddress();
	}
	public String getNamujiAddress() {
		return member.getNamujiAddress();
	}
	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return false;
	}
	
}
