import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function Navbar() {
  return (
    <nav className="navbar navbar-light" style={{ backgroundColor: '#007bff', paddingLeft: '20px' }}>
      <a className="navbar-brand text-white" href="/" style={{ marginLeft: '10px' }}>WikiCountries</a>
    </nav>
  );
}

export default Navbar;
