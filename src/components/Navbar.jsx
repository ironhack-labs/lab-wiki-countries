import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
        <Link className="button" to="/">WikiCountries</Link>
    </nav>
  )
}

