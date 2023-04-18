// imports the Link component from the react-router-dom library.

import { Link } from 'react-router-dom';

// functional component that returns a nav element with a Link component inside it. The Link component is used to create a link to the homepage of the app (represented by /). The navbar-brand class is used to style the link as a branding element.

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
        <Link to="/" className="navbar-brand">
          WikiCountries
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
