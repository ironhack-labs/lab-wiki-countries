import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar(props) {
    return (
        <nav className="navbar navbar-dark bg-dark">
        <NavLink className="text-decoration-none text-light px-3 py-1 border btn btn-dark m-2" exact to="/" activeClassName="bg-warning">Wiki Countries_</NavLink>
        </nav>
    )
}

export default NavBar
