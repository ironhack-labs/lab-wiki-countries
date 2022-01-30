import React from 'react';
import '../styles/Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar navbar-dark bg-primary nb-3'>    
            <div className='container'>
            <a style={{color: 'white', fontSize: '20px', textDecoration: "none"}} href='#'>WikiCountries</a>
            </div>
        </div>
    )
}

export default Navbar; 