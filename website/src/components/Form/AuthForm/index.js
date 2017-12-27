import React, { Component } from 'react'
import PropTypes from "prop-types";

import { Card, CardActions, CardText, CardTitle } from "material-ui/Card";
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';


class AuthForm extends Component {

  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      errorMsg: ""
    }
  }

  render() {
    return (
      <Card style={{  marginLeft:'300px', marginRight:'300px', marginTop:'200px' ,textAlign: 'center' }}>
        <CardTitle>
          <h3>Login</h3>
        </CardTitle>

        <CardText>
          {
            this.props.error &&
            <p style={{  color:'#F00' }}>
              {this.props.error}
            </p>
            
          }

          {
            this.state.errorMsg &&
            <p style={{  color:'#F00' }}>
              {this.state.errorMsg}
            </p>
            
          }

          <TextField
            className="Form-Input" 
            hintText="username"
            hintStyle={{color:'#ccc'}} 
            id={"1"} 
            type="text"
            value={this.state.username} 
            onChange={this.editUsername} 
          />
          <br/>
          <TextField
            className="Form-Input" 
            hintText="password"
            hintStyle={{color:'#ccc'}} 
            id={"2"} 
            type="password"
            value={this.state.password} 
            onChange={this.editPassword} 
          />
        </CardText>

        <CardActions>
          <FlatButton
            type="submit"
            primary
            label="Connexion"
            onClick={this.handleSubmit}
          />
        </CardActions>
      </Card>
    )
  }

  handleSubmit = () => {
    if(!this.state.username && !this.state.password) {
      this.setState({errorMsg: "Please fill in the fields"})
    }

    else{
      this.props.handleLogin({...this.state})
      this.setState({username: "", password: "", errorMsg: ""});
    }
  }

  editUsername = (e) => {
    this.setState({username: e.target.value, errorMsg: ""});
  }

  editPassword = (e) => {
    this.setState({password: e.target.value, errorMsg: ""});
  }
}

AuthForm.propTypes = {
  error: PropTypes.string.isRequired
}

export default AuthForm;