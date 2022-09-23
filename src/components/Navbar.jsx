import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <div className="container">
          <Link className="navbar-brand" to={"/"}>WikiCountries</Link>
        </div>
    </nav>
  )
}

export default Navbar