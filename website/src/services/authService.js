import axios from "axios";

const AuthService = {

  setToken: (token) => {
    axios.defaults.headers.common['Authorization'] = token;
    localStorage.setItem('token', token);
  },

  isLoggedIn: () => (
    !!localStorage.getItem('token')
  ),

  login: (user, password) => {
    return axios.post('/auth/refresh_token', {
      userName: user,
      password: password
    }).then(res => {
      AuthService.setToken(res.data);
    })
  },

  logout: () => {
    axios.defaults.headers.common['Authorization'] = null;
    localStorage.clear();
  }
};

export default AuthService;