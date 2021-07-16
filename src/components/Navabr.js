import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div>
        {' '}
        <nav class="navbar navbar-dark bg-secondary mb-3">
          <div class="container">
            <a class="navbar-brand" href="/">
              WikiCountries
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
