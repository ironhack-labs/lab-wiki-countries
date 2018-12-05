import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./CountryDetailCSS.css"
import { Link } from 'react-router-dom';

export default class CountryDetail extends Component {
  render() {
    return (
      <div className="box-countries">
        {this.props.countries.map((country, index) => {
          return (
            <div className="list-group"key={index}>
            <Link to={country.cca3}>{country.flag} {country.name.common}</Link>

            </div>
          );
        })}
      </div>
    );
  }
}
