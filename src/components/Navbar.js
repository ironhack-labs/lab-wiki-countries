import { Link, NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar navabar-dark bg-primary mb-3">
        <div className = "container">
      <Link className="navbar-brand" href="/">LAB - WikiCountries</Link>
        </div>
    </nav>
  )
}
 
export default Navbar