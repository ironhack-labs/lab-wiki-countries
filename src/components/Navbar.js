import React from 'react';
import { NavLink } from 'react-router-dom';
 
const navbar = () => {
  return (
  

<nav class="navbar navbar-dark bg-primary mb-3">
  <div class="container">
  <NavLink className="navbar-brand" exact activeStyle={{fontWeight: 'bold', color: 'red'}} to='/'>CountriesList</NavLink>
  </div>
</nav>
  )
}
 
export default navbar;
