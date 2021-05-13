import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <Link to="/">
      <div>
        <h1>WikiCountries.</h1>
      </div>
    </Link>
  );
}
