import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link className="navbar-brand" to="/">
        WikiCountries
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            by David Hatch
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
