import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary overflow-auto">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">WikiCountries</span>
      </Link>
    </nav>
  );
};

export default Navbar;
