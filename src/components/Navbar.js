import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
     <nav class="navbar navbar-dark bg-primary mb-3">
        <div class="container">
          <a class="navbar-brand" href="/">WikiCountries</a>
          <Link className="countriesListLink"to ={`/countriesList`}>
        Countries List
            </Link>


        </div>
      </nav>




    </div>
  )
}
