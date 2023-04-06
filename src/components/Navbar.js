import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="App-header">
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <Link className="navbar-brand" to="/">
            LAB Wiki Countries
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
