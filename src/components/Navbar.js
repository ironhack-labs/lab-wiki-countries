import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
        <Link className="navbar-brand" to="/">
          WikiCountries
        </Link>
        <Link to="/countrylist" className="nav-link">Country List</Link>
      </div>
    </nav>
  );
}

export default Navbar;
