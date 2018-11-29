import React from 'react';
import { Link } from 'react-router-dom';

const navbar = ({title}) => {

  return (
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <Link to={`/`} className="navbar-brand">{title}</Link>
        </div>
      </nav>
  )
}

export default navbar;