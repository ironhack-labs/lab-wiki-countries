import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="Navbar">
        <ul>
          <Link to="/"> Wiki Countries </Link>           
        </ul>
      </nav>
    );
}

export default Navbar;