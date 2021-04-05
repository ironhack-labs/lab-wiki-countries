import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-dark bg-info mb-3">
        <div className="container">
          <Link className="navbar-brand" to="/">
            WikiCountries
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
