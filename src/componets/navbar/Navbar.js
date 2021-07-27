import React, { Component } from "react";
import { render } from "react-dom";
import './Navbar.css'

class NavBar extends Component{



 
    render(){
        return (
                <nav className = "nav-bar">
                     <h1>WikiCountries</h1> 
                </nav>
        )
    }
}


export default NavBar