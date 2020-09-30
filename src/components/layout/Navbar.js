import React from 'react'

import { NavLink } from 'react-router-dom'

const Navbar = () => {

    return ( 
    
        <nav className="navbar navbar-dark bg-primary mb-3">
        
            <div className="container-flex">
                
                <div className="row justify-content-start navbar">
         
                    <NavLink to='/' className="navbar-brand">WikiCountries</NavLink>
                    
                </div>
        
            </div>
       
        </nav>

    )
}


export default Navbar