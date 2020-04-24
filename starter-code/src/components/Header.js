import React from 'react';

const Header = (props) => {
  return (
      <nav className='navbar navbar-dark bg-primary mb-3'>
        <div className='container'>
          <a className='navbar-brand' href='/'>WikiCountries</a>
        </div>
      </nav>
  );
}

export default Header;
