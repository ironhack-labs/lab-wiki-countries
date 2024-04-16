import { Link } from "react-router-dom";

function Navbar() {

  return (
    <nav className=" bg-blue-500 h-20 flex items-center">
      <Link to={"/"}>
        <h2 className="text-white text-3xl ms-32">WikiCountries</h2>
      </Link>
    </nav>
  );
}

export default Navbar;
