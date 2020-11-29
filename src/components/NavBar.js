import React from 'react'
import { Link } from 'react-router-dom'
export default function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <Link className="navbar-brand" to='/'>WikiCountries</Link>
    </nav>
  )
}
