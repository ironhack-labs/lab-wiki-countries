import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark mb-3">
            <ul>
                <li><NavLink to="/" exact>WikiCountries</NavLink></li>
                <li><NavLink to="/countries">Lista de paises</NavLink></li>

            </ul>
        </nav>
    )
}

export default Navbar;


