import React from 'react'
import '../App.css'
import { NavLink }  from 'react-router-dom'

const navbar = () => {


    
    return (
        <nav className="navbar-main">
    
        <ul>
        <li><NavLink to='/' exact activeStyle={{ fontWeight: 'bold', color: 'red' }}>wikiCountries</NavLink></li>
        
    </ul>
    </nav>

    )



}

export default navbar;
