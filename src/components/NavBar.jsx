import React from 'react'
import { NavLink } from "react-router-dom";
// import { withRouter, Switch } from "react-router-dom";

 const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <div class="container">
     <NavLink className="navbar-brand" exact to="/"  >WikiCountries</NavLink>
     </div>
    </nav>
  )
}

export default NavBar;