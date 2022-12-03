import React from 'react';
import { NavLink } from "react-router-dom";

function Navbar () {
    return (
        <NavLink to="/" className={"navbar navbar-brand navbar-dark bg-primary mb-3"}>
            LAB - WikiCountries
        </NavLink>
    )
}

export default Navbar