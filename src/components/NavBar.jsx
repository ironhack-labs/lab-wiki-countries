import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav>
        <Link to="/" className="nav-link">Wiki-Countries</Link>
      </nav>
    </div>
  );
};

export default NavBar;
