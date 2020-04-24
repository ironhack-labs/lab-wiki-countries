import React from 'react';

const Error = ({ error }) => {
  return (
    <div className='container'>
      <div className='row'>
        Error: {error}
      </div>
    </div>
  );
}
export default Error;
