import React from "react";
import { NavLink } from 'react-router-dom'
import './Navbar.css'



export default function Navbar() {
    return (
            <NavLink exact to="/" >
            <nav class="navbar navbar-dark bg-primary mb-3">
                <div class="container">
                    <a class="navbar-brand a" href="/">WikiCountries</a>
                </div>
            </nav>
            </NavLink>
        
    )
}
