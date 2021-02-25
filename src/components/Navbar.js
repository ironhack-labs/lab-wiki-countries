import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
        <NavLink to="/" exact activeClassName="selected-link">
            <h3 style={{color: "white"}}>WikiCountries</h3>
        </NavLink>
      </div>
    </nav>
  );
}
export default Navbar;