import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          WikiCountries
        </NavLink>
        <nav>
          <NavLink to="/">
            <button>Home</button>
          </NavLink>

          <NavLink to="/countriesList">
            <button>List of Countries</button>
          </NavLink>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
