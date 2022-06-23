import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <NavLink className="navbar-brand" to="/">WikiCountries</NavLink>
        </div>
    </nav>
  )
}
