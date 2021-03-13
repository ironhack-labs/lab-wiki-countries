import React, { Component } from 'react';

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-dark bg-primary mb-3">
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
