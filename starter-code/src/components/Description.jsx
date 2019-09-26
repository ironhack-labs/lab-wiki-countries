import React, { Component } from "react";
import countries from "./../countries";
import { Link } from "react-router-dom";

export default class Description extends Component {
  render() {
    return (
      <div className="list-group">
        {countries.map(country => (
          <Link to="/" key={country.cca3}>
            {country.capital[0]}
          </Link>
        ))}
      </div>
    );
  }
}
