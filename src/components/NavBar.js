import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar(){
    return(
        <nav class="navbar navbar-dark bg-primary mb-3">
            <div class="container">
                <NavLink class="navbar-brand" to="/">WikiCountries</NavLink>
            </div>
        </nav>
    )
}