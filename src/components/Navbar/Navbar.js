import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-dark bg-primary mb-3">
                <div class="container">
                    <NavLink className="navbar-brand" to="/" activeStyle={{ color:'red'}}>WikiCountries</NavLink> 
                </div>
            </nav>
        </div>
    )
}
