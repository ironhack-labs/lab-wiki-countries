import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <nav className='navbar bg-primary'>
      <Link className="navbar-brand ms-5 ps-5 text-white fs-3" to="/">WikiCountries </Link>
    </nav>
  )
}

export default Navbar