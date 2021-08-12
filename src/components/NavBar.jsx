import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark mb-3">
      <div className="container-fluid">
        <NavLink exact to="/" className="link">
          <div className="title navbar-brand">IronWiki</div>
        </NavLink>
        <div className="navbar-nav">
          <NavLink exact to="/countries" className="link">
            All countries
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar
