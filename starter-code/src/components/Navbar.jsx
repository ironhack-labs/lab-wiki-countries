import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-dark bg-primary" id="navlinks">
          <Link className="links" to="/">
            Home
          </Link>
          <Link className="links" to="/country">
            Countries
          </Link>
        </nav>
      </div>
    );
  }
}
