import React from 'react';
import { Link } from "react-router-dom";



function NavBar() {
    return <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
            <Link to='/'><h2><span className="navbar-brand mb-0 h1">LAB - WikiCountries</span></h2></Link>
        </div>
    </nav>
};

export default NavBar;