import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary ps-5">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">WikiCountries</Link>
      </div>
    </nav>
  );
};

export default NavBar;