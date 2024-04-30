import { NavLink } from "react-router-dom";
import './Navbar.css'

function Navbar() {
  return (
    <div className='Navbar'>
        <NavLink to='/'>
            WikiCountries
        </NavLink>
    </div>
  );
}

export default Navbar;
