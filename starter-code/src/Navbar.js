import React from "react";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
        <a
          className="navbarBrand" href="/"
          style={{ color: "white", fontSize: "1.5em", fontWeight: "bold" }}
        >
          WikiCountries
        </a>
      </div>
    </nav>
  );
};
