import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to={"/"}>
        <h1>WikiCountries</h1>
      </Link>
    </div>
  );
}

export default Navbar;