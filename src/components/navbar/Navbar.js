import React from 'react'
import './Navbar.css'

import { Link } from 'react-router-dom'

function MainNavbar() {

    return (

        <>

            <nav className='navbar navbar-dark bg-primary'>

                <Link className='navbar-brand' to='/'>WikiCountries</Link>

            </nav>

        </>
    )
}

export default MainNavbar
