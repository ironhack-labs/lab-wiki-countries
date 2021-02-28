// Iteration 1.2.
import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-dark bg-primary mb-3">
                <div class="container">
                    {/* <a class="navbar-brand" href="/">WikiCountries</a> Link instead of a, and to instead of href */}
                    <Link className="navbar-brand" to="/">WikiCountries</Link>
                </div>
            </nav>        
        </div>
    )
}

export default Navbar;