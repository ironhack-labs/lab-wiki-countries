import React from 'react'
import { NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="navbar navbar-dark bg-light">
            <div className="container">            
            <NavLink
                activeStyle={{ fontWeight: "bold" }}
                exact
                to='/'
            >
                WikiCountries
            </NavLink>
            </div>
        </nav>
    )
}

export default NavBar
