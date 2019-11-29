import React from "react";
import { Link, Route } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
        <Link style={{ color: "white" }} to="/">
          WikiCountries
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
