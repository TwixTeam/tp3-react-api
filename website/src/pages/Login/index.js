import React, { Component } from 'react'

import AuthForm from "../../components/Form/AuthForm";
import AuthService from "../../services/authService";

class Login extends Component {

  constructor() {
    super();

    this.state = {
      error: ""
    }
  }

  render() {
    return (
      <AuthForm handleLogin={this.handleLogin} {...this.state} />
    )
  }

  handleLogin = (credentials) => {
    localStorage.clear();
    AuthService.login(credentials.username, credentials.password).then(res => {
      this.props.history.push('/');
    }).catch(err => {
      this.setState({error: "Bad credentials"});
    });
  }
}

export default Login;