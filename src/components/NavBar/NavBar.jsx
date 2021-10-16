import React from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {
  render() {
    return (
      <header className="App-header">
        <ul>
          <li>
            <Link to="/">WikiCountries</Link>
          </li>
        </ul>
      </header>
    );
  }
}
