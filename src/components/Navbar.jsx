import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Navbar">
      <h2>WikiCountries</h2>
      <ul>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/about">About</Link>
        <br></br>
        <Link to="/projects">Projects</Link>
      </ul>
    </nav>
  );
}
export default Navbar;
