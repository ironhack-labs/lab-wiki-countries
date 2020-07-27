import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <Link className="navbar-brand text-white" to="/">WikiCountries</Link>
        </nav>
    )
}

export default NavBar
