import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary mb-3">
      <div className="container-fluid">
        <Link to={'/'} className="navbar-brand">
          LAB - WikiCountries
        </Link>
      </div>
    </nav>
  );
}
