import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary">
          <Link className="navbar-brand" to="/">
            WikiCountries
          </Link>
        </nav>
      </div>
    );
  }
}

export default Navbar;