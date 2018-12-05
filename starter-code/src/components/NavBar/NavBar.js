import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-dark bg-primary mb-3">
          <div class="container">
            <a class="navbar-brand" href="/">
              WikiCountries
            </a>
          </div>
        </nav>
      </div>
    );
  }
}
