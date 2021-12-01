import React from 'react'
import { NavLink } from "react-router-dom";


const Navbar = () => {
  
  const activeText = { color: 'red', backgroundColor: "black" }
  return (
    <nav>

      <NavLink to="/details" activeStyle={activeText} > Detalles</NavLink>

    </nav>
  )
}

export default Navbar