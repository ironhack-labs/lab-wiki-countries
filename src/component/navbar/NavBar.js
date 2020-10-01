import React from 'react'

import { NavLink } from 'react-router-dom'

const NavBar = () => {


    return (
        <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
                <NavLink to='/' className='navbar-brand'>WikiCountries</NavLink>
            </div>
        </nav>
    )
}

export default NavBar;