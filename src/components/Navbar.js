import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <Link to="/">
            <h2 className="navbar-brand">WikiCountries</h2>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
