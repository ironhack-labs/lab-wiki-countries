import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import countriesArr from "./countries.json";
import { Switch, Route, Link } from "react-router-dom";
import CountryDetail from "./CountryDetail";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: countriesArr
    };
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">
              WikiCountries
            </a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div
              className="col-5"
              style={{ maxHeight: "90vh", overflow: "scroll" }}
            >
              <div className="list-group">
                {this.state.countries.map((country, idx) => {
                  return (
                    <Link
                      className="list-group-item list-group-item-action"
                      key={idx}
                      to={"/" + country.cca3}
                    >
                      {country.flag} {country.name.official}
                    </Link>
                  );
                })}
              </div>
            </div>
            <Switch>
              <Route
                exact
                path="/:cca"
                render={props => {
                  let countryCode = props.match.params.cca;
                  let choosenCountry = this.state.countries.find(
                    country => country.cca3 === countryCode
                  );
                  let bordersArr = choosenCountry.borders.map(code =>
                    this.state.countries.find(country => country.cca3 === code)
                  );
                  return (
                    <CountryDetail
                      country={choosenCountry}
                      borders={bordersArr}
                    ></CountryDetail>
                  );
                }}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
