import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <div className="container">
                <ul>
                    <a className="navbar-brand" href="/">LAB - WikiCountries</a>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;