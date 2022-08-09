import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="Navbar">
   <div className="container-fluid">
        <Link className="navbar-brand" to="/" >
        WikiCountries
        </Link>
        </div>
    </nav>
  );
}
export default Navbar;