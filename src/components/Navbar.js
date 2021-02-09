import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">
          <strong>WikiCountries</strong>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
