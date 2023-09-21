import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="Navbar">
          <ul>
            
            <NavLink to="/" className={({ isActive }) => isActive ? "selected" : ""}>
              WikiCountries
            </NavLink>
            
            
          </ul>
          
        </nav>
      );
    }

export default Navbar;
