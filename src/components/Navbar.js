import React, { Component } from 'react';

import { Link, NavLink } from 'react-router-dom';

class Navbar extends Component {
  state = {
    username: 'YOUR NAME'
  } 

  render() {
    return (
        <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>
    )
  }
}

export default Navbar;