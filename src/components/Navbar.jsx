import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="navbar navbar-light bg-primary text-white">
        <h2 className="p-1">
          <Link to={'/'}>WikiCountries</Link>
        </h2>
      </div>
    </>
  );
};

export default Navbar;
