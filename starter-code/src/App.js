import React, { Component } from "react";
import "./App.css";
import countries from "./countries.json";
import CountryDetail from "./CountryDetail/CountryDetail";
import { Switch, Route, Link } from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();

    this.countriesClone = [...countries];

    this.state = {
      countries: this.countriesClone
    };
  }

  searchCountry(choosenCountry) {
    let countryFound = [...this.state.countries];
    countryFound = countryFound.filter(country => {
      return choosenCountry === country.cca3;
    })[0];
    return countryFound.name.common;
  }

  render() {
    return (
      <div className="App">
        <div id="root">
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
                <div className="col-5">
                  <div className="list-group">
                    {this.state.countries.map((country, idx) => {
                      return (
                        <div className="container">
                          <div className="row">
                            <div className="col-5">
                              <div className="list-group">
                                <Link
                                  className="list-group-item list-group-item-action"
                                  to={country.cca3}
                                >
                                  {country.flag} {country.name.common}
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <Switch>
                  <Route
                    exact
                    path="/:choosenCountry"
                    render={props => {
                      var choosenCountry = props.match.params.choosenCountry;
                      let countryFound = [...this.state.countries];
                      countryFound = countryFound.filter(country => {
                        return choosenCountry === country.cca3;
                      });

                      console.log(countryFound[0].borders);

                      return (
                        <CountryDetail
                          country={countryFound[0]}
                          borders={cn => this.searchCountry(cn)}
                        ></CountryDetail>
                      );
                    }}
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
