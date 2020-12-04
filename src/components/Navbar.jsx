import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Navbar extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-dark bg-primary mb-3">
        <div class="container">
          <a class="navbar-brand" href="/">
            WikiCountries
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
