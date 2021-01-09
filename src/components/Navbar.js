import React from 'react';

import { Route, Link, Switch } from 'react-router-dom';

const Navbar = () => {

    return (
        <div>
            <nav className="navbar navbar-dark bg-primary mb-3">
                <div className="container">
                 <Link to="/" className="navbar-brand">WikiCountries</Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;