import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';


export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
    <div className="container">
        <Link to="/CountriesList" style={{color: "white"}}>WikiCountries</Link>
        <Link to="/" style={{color: "white"}}>Home</Link>
    </div>
  </nav>
  )
}

export default Navbar;
