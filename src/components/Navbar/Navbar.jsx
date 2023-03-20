import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
    return (
      <Link to={`/`}>
        <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
        <p className="navbar-brand">WikiCountries</p>
        </div>
      </nav>
        </div>
      </Link>
    );
};

export default Navbar;