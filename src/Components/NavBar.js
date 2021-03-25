import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export const NavBar = () => {
    return (
        <nav className="navbar text-primary bg-dark">
            <span className="navbar-text" style={{fontSize: '30px',fontWeight: '500', marginLeft: '100px'}}>
                WikiCountries
            </span>
        </nav>
    )
}
