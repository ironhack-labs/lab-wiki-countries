import React from 'react'
import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        LAB - WikiCountries
        &nbsp;&nbsp;
        <NavLink to="/" >Go to List</NavLink>
    </nav>
  )
}

export default Navbar