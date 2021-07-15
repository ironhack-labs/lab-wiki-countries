import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav class="navbar navbar-dark bg-primary mb-3">
      <div class="container">
        <NavLink class="navbar-brand" to="#">
          WikiCountries
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
