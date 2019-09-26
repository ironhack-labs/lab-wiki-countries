import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <Link to="/">
            {" "}
            <p className="navlink"> WikiCountries</p>
          </Link>
        </div>
      </nav>
    );
  }
}
