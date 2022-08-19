import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-dark mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">WikiCountries</a>
          <NavLink to="/countries" className="navbar-brand">Countries List</NavLink>

        </div>
      </nav>
  )
}

export default NavBar