package isep.web.sakila.webapi.model;

public class CredentialsWO extends WebObject{

	private static final long serialVersionUID = -2200376351309488649L;
	
	protected String userName;
	protected String password;

	public CredentialsWO() {
		super();
	}

	public CredentialsWO(String userName, String password) {
		super();
		this.userName = userName;
		this.password = password;
	}
	
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
}
