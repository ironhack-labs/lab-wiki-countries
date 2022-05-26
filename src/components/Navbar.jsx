import { Link } from 'react-router-dom';
import React from 'react';

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-dark bg-primary mb-3">
        <div class="container">
          <Link class="navbar-brand" to="/">
           LAB WikiCountries
         </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
