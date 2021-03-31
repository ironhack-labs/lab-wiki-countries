import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light space-around">
            <Link className="navbar-brand" href="/"><h1>Lab - Wiki Countries</h1></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse flex-end" id="navbarNav">
                <ul className="navbar-nav">
                {/* <li className="nav-item active">
                    <Link className="nav-link" href="#">Home</Link>
                </li> */}
                <li className="nav-item">
                    <Link className="nav-link" href="/">List of Countries</Link>
                </li>
                </ul>
            </div>
        </nav>
    )   
}

export default Navbar;