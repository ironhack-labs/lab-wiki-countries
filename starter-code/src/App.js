import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, Switch, Route } from "react-router-dom";
import countries from "./countries.json";
import CountryDetail from "./components/CountryDetail/CountryDetail";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: countries
    };
  }

  findCountry = id => {
    return this.state.countries.filter(country => {
      return country.cca3 === id;
    });
  };

  render() {
    return (
      <div className="App">
        <div>
          <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
              <Link className="navbar-brand" to="/">
                WikiCountries
              </Link>
            </div>
          </nav>
          <div className="container">
            <div className="row">
              <div className="col-5 countries-list">
                <div className="list-group">
                  {this.state.countries.map((country, index) => (
                    <Link
                      to={`/${country.cca3}`}
                      className="list-group-item list-group-item-action"
                    >
                      {country.flag} {country.name.common}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="col-7">
                <Switch>
                  <Route
                    path="/:cca3"
                    render={routeProps => (
                      <CountryDetail
                        country={this.findCountry(routeProps.match.params.cca3)}
                        findCountry={this.findCountry}
                      />
                    )}
                  />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
