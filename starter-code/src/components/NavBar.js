import React from 'react';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <nav className="navbar bd-navbar NavBar-wiki fixed-top">
      <h3>WikiCountries</h3>
      <ul className="navbar-nav">
        <li className="nav-item"><Link to='/'>Home</Link></li>
        <li className="nav-item"><Link to='/projects' style={{ textDecoration: 'none' }}>Projects</Link></li>
      </ul>
    </nav>
    
  )
}

export default navbar;