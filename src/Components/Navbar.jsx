import React from 'react'
import { NavLink } from "react-router-dom";
import '../styles/NavBar.css'

const Navbar = () => {
    return (
        <div className="navbar navbar-dark bg-primary mb-3">
            <NavLink 
                exact to="/"
                className="navbar-brand"
            >
                WikiCountries
            </NavLink>
        </div>
    )
}

export default Navbar
