import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-primary mb-3">
                <div className="container">
                     <Link to="/" className="navbar-brand">WikiCountries</Link>
                </div>
            </nav>
        </div>
    )
}


