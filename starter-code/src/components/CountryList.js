import React, { Component } from "react";

export default class CountryList extends Component {
  render() {
    return (
      <div className="container">
        <a className="navbar-brand" href="/">
          {this.props.title}
        </a>
      </div>
    );
  }
}
