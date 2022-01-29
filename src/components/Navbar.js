import React from 'react';
import logo from '../logo-ironhack-blue.png';
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
  const [state, setState] = React.useState(false);
  return (
    <nav className="Navbar navbar navbar-dark bg-dark">
      <Link className="navbar-brand" style={{ paddingBottom: '5px' }} to="/">
        <img width="40" height="40" src={logo} alt="ironhack" />
        <span style={{ paddingLeft: '10px' }}>LAB - WikiCountries</span>
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink
            activeClassName="selected"
            className="nav-link"
            to="/countries"
          >
            Countries
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
