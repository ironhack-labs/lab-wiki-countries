import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary ">
      <div className="container-fluid">
        <Link className="navbar-brand text-light">LAB - WikiCountries</Link>
      </div>
    </nav>
  );
}
export default Navbar;
