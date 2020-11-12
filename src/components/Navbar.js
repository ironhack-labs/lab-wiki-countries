import React from 'react'
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        
            
        <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
                <h2>WIKI COUNTRIES</h2>
            <NavLink className="navbar-brand" to="/" activeStyle={{fontWeight:'bold', color: 'white'}}>Clear Page</NavLink>
        </div>
         </nav>

        
    )
}

export default Navbar

