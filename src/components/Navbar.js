import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className={'navbar bg-primary navbar-expand-lg bg-body-tertiary'}>
      <div className={'container-fluid'}>
        <Link className="navbar-brand" to="/" style={{color:'#fff', fontWeight: 'bold'}}>
          LAB - WikiCountries
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
