import React from "react";
import "../App.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">
            WikiCountries
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
