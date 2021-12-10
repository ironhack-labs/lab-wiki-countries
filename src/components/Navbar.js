import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-danger mb-3">
        <div className="container">
          <Link className="navbar-brand" to="/">
            WikiCountries
          </Link>
        </div>
      </nav>
      <Outlet/>
    </>
  );
};

export default Navbar;
