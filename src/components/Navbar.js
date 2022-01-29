import React from 'react';
import logo from '../logo-ironhack-blue.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" style={{ paddingBottom: '5px' }} href="#">
        {' '}
        <img width="40" height="40" src={logo} alt="ironhack" />
        <span style={{ paddingLeft: '10px' }}>LAB - WikiCountries</span>
      </a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
