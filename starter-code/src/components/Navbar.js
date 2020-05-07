import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <ul>
      <NavLink className="navbar navbar-dark bg-primary" exact to="/">
        WikiCountries
      </NavLink>
    </ul>
  )
}

export default Navbar
