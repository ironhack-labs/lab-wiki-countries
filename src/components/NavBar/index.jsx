import React from 'react';
import { Link } from 'react-router-dom';
import { NavLogo } from './NavBarElements';

export default class NavBar extends React.Component {
  render() {
    return (
      <header class="navbar navbar-dark bg-dark">
        <NavLogo>
          <Link to="/">WikiCountries</Link>
        </NavLogo>
      </header>
    );
  }
}
