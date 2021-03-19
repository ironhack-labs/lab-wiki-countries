import React, { Component } from 'react';

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <h1
            style={{
              height: '60px',
              width: '100vw',
              backgroundColor: '#1E90FF',
              textAlign: 'left',
              paddingLeft: '30px',
              color: 'white',
            }}
          >
            WikiCountries
          </h1>
        </nav>
      </div>
    );
  }
}

export default Navbar;
