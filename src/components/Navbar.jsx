import { Link } from "react-router-dom";
import React from 'react'

function Navbar() {
    return(
        <nav className="nav">
        <div className="container">
          <Link to="/" className="button"> WikiCountries </Link>
          <Link to="/:countryId" className="button"> Details </Link>
        </div>
      </nav>
    )
      
}

export default Navbar;
