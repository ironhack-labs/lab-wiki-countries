import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <Link className="navbar-brand" to="/">
        WikiCountries
      </Link>
    </nav>
  );
}
