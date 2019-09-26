import React, { Component } from "react";

import JSONcountries from "./../countries";

import { Link } from "react-router-dom";

export default class CountryDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: null
    };
    this.findCountry = this.findCountry.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    const id = props.match.params.id;
    const country = JSONcountries.find(country => country.cca3 === id);

    return {
      ...state,
      country
    };
  }

  findCountry(cca3) {
    const country = JSONcountries.find(country => country.cca3 === cca3);
    return country.name.common;
  }

  render() {
    // console.log("this is here:", this.state.countries);
    const country = this.state.country;
    // console.log(country[0]);
    return (
      <div className="mx-5">
        <div className="card">
          <div className="card-body">
            <div className="row d-flex justify-content-around ">
              <h2 className="card-title">{country.name.common}</h2>
              <img
                src={`https://www.countryflags.io/${country.cca2}/flat/64.png`}
                alt={country.name.common}
              />
            </div>
            <h6 className="card-subtitle mb-2 text-muted">
              <strong>Oficcial Name: {country.name.official}</strong>
            </h6>
            <p className="card-text">Area: {country.area} km²</p>
            <ul>
              {country.borders.map(country => (
                <li>
                  <Link to={country}>{this.findCountry(country)}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
