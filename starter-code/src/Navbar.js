import React, { Component } from 'react';
// COMPONENTS 
import { Link } from 'react-router-dom';


class Navbar extends Component {
    render() {
        return (
            <nav className="nav-style">
                <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/About'>About</Link></li>
                <li><Link to='/Contact'>Contact Us</Link></li>
                </ul>
            </nav>
        );
    }
}
// inside the link to ='/Contact"> is what will show on the url
export default Navbar;