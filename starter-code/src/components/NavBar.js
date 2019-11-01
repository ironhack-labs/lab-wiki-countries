import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
  return (
    <div>
      <nav className="navbar">
        <span className="navbar-brand mb-0 h1"><Link to='/'>{props.headline}</Link></span>
      </nav>
    </div>
  )
}

export default NavBar;
