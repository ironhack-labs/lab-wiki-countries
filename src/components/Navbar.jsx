import React from "react";
import {Link} from"react-router-dom"

function Navbar() {
    return(
        <nav>
            <div className="container">
                <Link to="/">
                    Wiki Countries
                </Link>
            </div>
        </nav>
    )



}

export default Navbar;
