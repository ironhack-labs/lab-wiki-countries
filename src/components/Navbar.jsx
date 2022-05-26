import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav>
        <NavLink to="/"><h3>WikiCountries</h3></NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
