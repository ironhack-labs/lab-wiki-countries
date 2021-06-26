import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav className="bg-blue-400 py-3">
        <NavLink to="/">
          <h1 className="ml-6 text-2xl font-bold text-white">WikiCountries</h1>
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
