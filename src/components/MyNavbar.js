/*
 * Navbar.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

function MyNavbar() {
  return (
    <Navbar bg="dark">
      <Navbar.Brand>
        <Link to="/">WikiCountries</Link>
      </Navbar.Brand>
    </Navbar>
  );
}

export default MyNavbar;
