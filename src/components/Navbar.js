import React from 'react';
import './Navbar.css'
import {  Link,  } from 'react-router-dom'


const Navbar = () => {

    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/" exact activeClassName="active-section">Wiki Countries</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;

