import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <h6>WikiCountries Lab by Ironhack</h6>
      <nav>
        <Link to={'/Hallo'}>Link1</Link> <br />
        <Link to={'/Hallo'}>Link1</Link> <br />
        <Link to={'/Hallo'}>Link1</Link> <br />
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
