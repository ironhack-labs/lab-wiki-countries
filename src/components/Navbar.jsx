import React from 'react';
import { NavLink } from 'react-router-dom';
  
const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary">
        <NavLink className="navbar-brand" to="/">WikiCountries</NavLink>
    </nav>
  )
}
 
export default NavBar;