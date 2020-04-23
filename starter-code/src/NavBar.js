import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class NavBar extends Component {
    componentDidMount(){ //window.onload happens once when the components first mounts 
        console.log(this)
    }

    render() {
        return (
            <nav className="nav-style">
                <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                
                </ul>
          </nav>
        );
    }
}

export default NavBar;
