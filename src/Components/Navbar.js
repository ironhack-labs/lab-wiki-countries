import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-dark">
      <p className="navbar-brand" href="#">
        <Link className="navbar-brand" Style="color: white;" to="/">
          WikiCountries
        </Link>
      </p>
    </nav>
  );
};
export default Navbar;
