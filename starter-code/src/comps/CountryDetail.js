import React, { Component } from "react";

class CountryDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1> Title</h1>
        <h2> Capital</h2>
        <h2> Area</h2>
        <ul>
          <li> country </li>
        </ul>
      </div>
    );
  }
}

export default CountryDetails;
