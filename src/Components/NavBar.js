import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>

          <NavLink activeStyle={{ color: 'blue' }} exact to="/">
            Wiki Countries
          </NavLink>

      </ul>
    </nav>
  );
}

export default Navbar;