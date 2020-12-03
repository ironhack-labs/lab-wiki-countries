import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-primary mb-3">
                <div className="container">
                    <Link className="navbar-brand" to="/">Home</Link>
                    <Link className="navbar-brand" to="/">All countries</Link>
                    <Link className="navbar-brand" to="/countriesFromAPI">Countries from API</Link>
                <a className="navbar-brand" href="/">WikiCountries</a>
                </div>
 
            </nav>
        </div>
    )
}
