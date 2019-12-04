import React, { Component } from "react";
import "./App.css";
import CountryDetail from "./CountryDetail/CountryDetail";
import countries from "./countries.json";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: [...countries]
    };
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">
              WikiCountries
            </a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div className="list-group">
                {this.state.countries.map((country, idx) => (
                  <Link
                    key={idx}
                    className="list-group-item list-group-item-action"
                    to={country.cca3}
                  >
                    {country.flag} {country.name.common}
                  </Link>
                ))}
              </div>
            </div>
            <Route
              exact
              path="/:countryCode"
              render={country => {
                let countryCode = country.match.params.countryCode;
                let countryIndex = this.state.countries.findIndex(
                  country => country.cca3 === countryCode
                );
                
                
                let countryBorder = this.state.countries.findIndex(
                  country => country.borders === countryCode
                );
                

                return (
                  <CountryDetail country={this.state.countries[countryIndex]} countryBorder={countryBorder} />
                );
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
