import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        
            <nav className="navbar" style={{backgroundColor: '#e3f2fd'}}>
                <div className="container-fluid">
                    <Link className="navbar-brand px-5" to='/'>Wiki-Countries</Link>
                </div>
            </nav>
    
    )
}

export default NavBar