// src/components/Navbar.js

import { Link, NavLink } from 'react-router-dom'; // <== IMPORT

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
        <a className="navbar-brand" href="/">
          WikiCountries
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
