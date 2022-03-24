import React from 'react';

export const Navbar = () => {
  return (
    <div
      style={{
        backgroundColor: 'darkblue',
        height: '70px',
        color: 'white',
        fontSize: '1.6rem',
      }}
    >
      <nav
        className="text-start"
        style={{ paddingTop: '15px', paddingLeft: '100px' }}
      >
        <h2>IronCountries</h2>
      </nav>
    </div>
  );
};
