import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark text-white">
        <NavLink className={"navbar-brand text-white"} to={"/"}>
          WikiCountries
        </NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `nav-link text-white ${isActive ? "active" : ""}`
                }
              >
                Home
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
