import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./CountryDetailCSS.css"

export default class CountryDetail extends Component {
  render() {
    return (
      <div className="box-countries">
        {this.props.countries.map((country, index) => {
          return (
            <div className="list-group"key={index}>
              <a href={country.cca3} className="list-group-item list-group-item-action">
              {country.flag}
            <span>{country.name.common}</span>
               
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}
