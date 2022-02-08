import './NavbarStyle.css'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <nav className="Navbar navbar py-3">
        <div className="container">
          <Link className='linx' to="/">WikiCountries</Link>
        </div>
      </nav>
    );
}

export default Navbar;