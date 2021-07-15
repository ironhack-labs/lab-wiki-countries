import React, { Component } from 'react';

import CountriesList from './CountriesList';

class Navbar extends Component {
  render() {
    return (
      <div>
        <h1>WIKICOUNTRY</h1>

        <ul class="nav flex-column">
          <li class="nav-item">
            <CountriesList />
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
