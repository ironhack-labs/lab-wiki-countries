import React from 'react'
import {Link} from 'react-router-dom'
import nav from 'react-bootstrap';


//Color schemes navbar from boostrap 

export default function Navbar() {

    return (
        <nav class="navbar navbar-dark bg-primary mb-3">
        <div class="container">
          <a class="navbar-brand" href="/">WikiCountries</a>
        </div>
       </nav>

    )
}