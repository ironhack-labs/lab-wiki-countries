
import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return(
    <nav>
        <ul>
            <li>
                <NavLink activeStyle={{color: "red"}} exact to="/">Home</NavLink>
            </li>
        </ul>
    </nav>
    );
}

export default Navbar;