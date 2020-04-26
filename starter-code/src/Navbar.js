import React, { Component } from 'react';
// COMPONENTS 
import { Link } from 'react-router-dom';


class Navbar extends Component {
    render() {
        return (
            <nav className="nav-style">
                <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/src/About.js'>About</Link></li>
                <li><Link to='/src/Contact.js'>Contact Us</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;