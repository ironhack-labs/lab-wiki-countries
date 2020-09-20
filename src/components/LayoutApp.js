import React from 'react';

const LayoutApp = ({ children }) => {
  return (
    <div>
      <div
        style={{
          width: '100vw',
          backgroundColor: '#0F8FF4',
          padding: '10px',
          color: 'white',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        WikiCountries
      </div>
      <div
        style={{
          padding: '30px',
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default LayoutApp;
