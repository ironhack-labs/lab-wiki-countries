import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class NavigationBar extends Component {
  render() {
    return (
      <Navbar bg="primary" variant="dark">
        <NavLink to="/">
          <Navbar.Brand>WikiCountries</Navbar.Brand>
        </NavLink>
      </Navbar>
    );
  }
}

export default NavigationBar;
