
import React from 'react';

import {
  Route,
  Switch
} from "react-router-dom";

import CustomerManagement from "../CustomerManagement";
import CustomerListPage from "../CustomerListPage";
import RentalManagement from "../RentalManagement";
import NavBar from "../../components/NavBar";

import "./Layout.css";

localStorage.clear();

const Layout = () => (
  <div>
    <NavBar />
    <div className="content">
      <Switch>
        <Route exact path="/" component={CustomerManagement} />
        <Route path="/customers" component={CustomerListPage} />
        <Route path="/rentals" component={RentalManagement} />
        <Route component={CustomerManagement} />
      </Switch>
    </div>
  </div>
);

export default Layout;
