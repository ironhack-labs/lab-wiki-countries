import React from "react";

function Navbar(){
    return(
        <nav>
            <h1>WikiCountries</h1>
            <NavLink exact to="/">Countries List</NavLink>
        </nav>
    )
}

export default Navbar;