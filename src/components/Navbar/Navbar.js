import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
            <nav class="navbar navbar-dark bg-primary mb-3">
                <div class="container">
                    <NavLink className="navLink" to="">WikiCountries_</NavLink>
                </div>
            </nav>
    );
}

export default NavBar;
