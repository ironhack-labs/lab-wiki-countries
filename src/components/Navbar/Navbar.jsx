import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand">WikiCountries</Link>
        </div>
    </nav>

  )
}
