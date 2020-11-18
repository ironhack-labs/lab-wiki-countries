import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <h1 className="font-weight-bold">WikiCountries</h1>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
