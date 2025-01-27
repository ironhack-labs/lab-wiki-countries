import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar bg-primary">
    <div className="container-fluid d-flex justify-content-center p-2">
      <Link to="/" >
      <h1 style={{color : "white"}}>WikiCountries</h1>
      </Link>
    </div>
  </nav>
  );
}

export default Navbar;