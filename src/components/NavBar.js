import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="p-3 mb-2 bg-primary text-white">
          <div className="container-fluid">
            <span className="navbar-text fw-bold fs-3">WikiCountries</span>{' '}
          </div>{' '}
        </nav>{' '}
      </div>
    );
  }
}

export default Navbar;