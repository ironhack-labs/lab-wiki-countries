// components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const navbar = () => {
  return (
    <nav className="navbar navbar-dark myNav">
      <div className="container-fluid" >
        <li className="navbar-brand" href="/">Wiki Countries</li>

      </div>
    </nav>
  )
}

export default navbar;