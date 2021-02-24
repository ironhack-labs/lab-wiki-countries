import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
const Navbar = () => (
  <nav className="navbar navbar-dark bg-dark">
    <ul>
      <li>
        <NavLink className="navbar-link" to="/" exact>
          WikiCountries
        </NavLink>
      </li>
    </ul>
  </nav>
);
export default Navbar;
