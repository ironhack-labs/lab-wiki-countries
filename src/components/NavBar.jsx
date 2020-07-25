import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class NavBar extends Component {
    render() {
        return (
        <nav className="navbar navbar-light bg-info">
            <Link className="navbar-brand mb-0 ml-5 h1 text-white" to="/">WikiCountries</Link>
        </nav>
        );
}
}

export default NavBar;
