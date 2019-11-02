import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CountryDetail extends Component {
  render() {
    return (
      <div>
        <p>{this.country}</p>
        <p>Capital: {this.capital}</p>
        <p>Area: {this.area}</p>
        <p>Borders: {this.borders}</p>
      </div>
    );
  }
}
