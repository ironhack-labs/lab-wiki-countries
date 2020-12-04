import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Navbar.css'

const navbar = () => {
    return (
        <nav className='navbar navbar-dark bg-primary mb-3 fixed-top'>
            <div className='container'>
                <Link to='/'>
                    <p>WikiCountries</p>
                </Link>
            </div>
        </nav>
    )
}

export default navbar