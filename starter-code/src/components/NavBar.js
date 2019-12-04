import React, { Component } from "react";



class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav class="navbar navbar-dark bg-primary mb-3">
        <div class="container">
          <a class="navbar-brand" href="/">
            WikiCountries
            
          </a>
        </div>
      </nav>
    );
  }
}

export default NavBar;
