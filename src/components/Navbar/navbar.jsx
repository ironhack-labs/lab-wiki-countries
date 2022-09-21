import { Link } from "react-router-dom"

const Navbar = () => {
  return (
      <nav className="navbar  bg-primary  navbar-dark">
          <Link to="/" className="navbar-brand mx-5" >WikiCountries</Link>
            {/* <span className="navbar-brand mx-5"><b>WikiCountries</b></span> */}
      </nav>
  );
};

export default Navbar;