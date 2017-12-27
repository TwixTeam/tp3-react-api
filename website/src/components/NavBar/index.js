import React from 'react'

import { Link } from 'react-router-dom';
import "./NavBar.css";

const NavBar = () => (
  <div className="NavBar">
    <div className="main">
      <Link to="/">Home</Link>
      <Link to="/customers">Customers</Link>
      <Link to="/rentals">Rentals</Link>
    </div>
  </div>
);

export default NavBar;