import React from 'react';
import countries from '../countries.json';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav class="navbar navbar-dark bg-primary mb-3">
            <div class="container">
                <h1>LAB - WikiCountries</h1>
            </div>
        </nav>
    );
}

export default Navbar;