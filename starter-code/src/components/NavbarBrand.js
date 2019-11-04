import React from 'react';
import { Link } from 'react-router-dom';

const NavbarBrand = props => {
  return (
    <div>
      <nav className="navbar">
        <span className="navbar-brand mb-0 h1"><Link to='/'>{props.brand}</Link></span>
      </nav>
    </div>
  )
}

export default NavbarBrand;
