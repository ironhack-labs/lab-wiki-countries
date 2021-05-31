import React from 'react'
import {Link} from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <nav>
                <Link to="/">WikiCountries</Link>
            </nav>
        </div>
    )
}


export default NavBar;