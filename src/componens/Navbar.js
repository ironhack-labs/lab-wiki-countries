import { Link } from "react-router-dom"

function Navbar() {
    return ( 
        <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
        <Link  className="navbar-brand" to="/">WikiCountries</Link>
          {/* <a className="navbar-brand" href="/">WikiCountries</a> */}
        </div>
      </nav>
    )
}

export default Navbar 