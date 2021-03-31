import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav class="navbar navbar-dark bg-dark mb-3">
            <div class="container">
            <Link class="navbar-brand" to="/">Lab WikiCountries</Link>
            </div>
        </nav>
    )   
}

export default Navbar;