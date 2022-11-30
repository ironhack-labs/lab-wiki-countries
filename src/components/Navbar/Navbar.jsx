import { NavLink } from "react-router-dom";
import './Navbar.css'
function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <NavLink to="/">WikiCountries</NavLink>
      </ul>
    </nav>
  )
}

export default Navbar; 