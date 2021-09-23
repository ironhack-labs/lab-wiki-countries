import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav class="navbar navbar-dark bg-primary mb-3">
            <div class="container">
                <NavLink exact to="/" Style={{ color: "white" }}>WikiCountries</NavLink>
            </div>

        </nav>
            
            /* <NavLink to="/experience" activeStyle={{ color: "red" }}>Experience</NavLink> */
            /* <NavLink to="/education" activeStyle={{ color: "red" }}>Education</NavLink> */
         
       
        
      
    )
}