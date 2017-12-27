import React, { Component } from "react";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import Layout from "../pages/Layout";
import Login from "../pages/Login";
import AuthService from "../services/authService";

import "./App.css";

const PrivateContent = (props) => (
  <Route path="*" render={() => (
    !AuthService.isLoggedIn()
      ? <Redirect to="/login" />
      : <Layout {...props} />
  )}
  />
);

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <PrivateContent />
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
