// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary text-center">
      <div className="container">
        <Link className="navbar-brand " to="/">
        WikiCountries
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;



