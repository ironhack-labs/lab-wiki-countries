import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { withRouter, Switch } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
          <NavLink exact to="/" className="navbar-brand">
          WikiCountries
          </NavLink>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
