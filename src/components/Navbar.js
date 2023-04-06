import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav class="navbar navbar-dark bg-primary mb-3">
    <div class="container">
      <a class="navbar-brand" href="/">WikiCountries</a>
      <NavLink class="navlink" to="/">Home</NavLink>
      <NavLink class="navlink" to="./countriesList">Countries List</NavLink>
      <NavLink class="navlink" to="./countriesDetails">Countries Details</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;