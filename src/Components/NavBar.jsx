import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <NavLink exact to= "/"> 
            <h1>LAB-WIKI-COUNTRIES</h1>
            </NavLink> 
        </nav>
    )
}

export default NavBar
