import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-primary' >
        <Link to='/' ><h1 className='navbar-brand'> WikiCountries </h1></Link>
    </nav>
  )
}

export default Navbar