import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary ">
      <div className="container-fluid container">
        <a className="navbar-brand" href="#">WikiCountries</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
    </div>
  )
}

export default Navbar