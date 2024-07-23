import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 mb-4">
      <div className="container mx-auto">
        <a className="text-white text-xl font-bold" href="/">
          WikiCountries
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
