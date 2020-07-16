import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

    return (

        <nav className="navbar navbar-dark bg-primary">
            <NavLink exact to="/" className="navbar-brand">WikiCountries</NavLink>
        </nav>
    )

}

export default NavBar