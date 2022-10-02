import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-secondary ps-5">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">World Cpuntries</Link>
      </div>
    </nav>
  );
};

export default NavBar;