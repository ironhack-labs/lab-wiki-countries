import { link } from "react-router-dom"
import React from "react";


function Navbar() {
    return(
        <nav>
            <div>
                <Link to="/">WikiCountries</Link>
            </div>
        </nav>
    )
}

export default Navbar;
