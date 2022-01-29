import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">
            LAB - WikiCountries
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
