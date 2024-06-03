import { Link } from 'react-router-dom';

function Navbar() {
    return (
    <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/someCountryId">Country Details</Link> {/* Replace 'someCountryId' with an actual id */}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
