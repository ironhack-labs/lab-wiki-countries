import React from "react";
import {NavLink} from "react-router-dom"

function Navbar(){
    return(
        <nav>
            <h1>WikiCountries</h1>
            <NavLink exact to="/countries">Countries List</NavLink>
        </nav>
    )
}

export default Navbar;