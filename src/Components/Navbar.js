import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (

        <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
                <NavLink exact to="/" className="navbar-brand" >WikiCountries</NavLink>
            </div>
        </nav>
    )
}