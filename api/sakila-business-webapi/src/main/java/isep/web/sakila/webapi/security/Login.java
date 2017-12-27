package isep.web.sakila.webapi.security;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class Login implements UserDetails {
	private static final long serialVersionUID = 1L;
	
	private byte id;
	private String email;
	private String password;
	private Collection<? extends GrantedAuthority> authorities;
	
	public Login() {
	}
	
	public Login(byte b, String email, String password) {
		super();
		this.id = b;
		this.email = email;
		this.password = password;
	}

	public byte getId() {
		return id;
	}
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	@Override
	public String getPassword() {
		return password;
	}

	@Override
	public String getUsername() {
		return email;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}
	
}