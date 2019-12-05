import React, { Component } from "react";
import "./App.css";
import countries from "./countries.json";
import CountryDetail from "./CountryDetail/CountryDetail";
import { Switch, Route, Link } from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();

    this.clonedCountries = [...countries];

    this.state = {
      countries: this.clonedCountries
    };
  }

  selectOneCountry(selected) {
    let countryList = [...this.state.countries];
    countryList = countryList.filter(element => {
      return selected === element.cca3;
    })[0];
    return countryList.name.common;
  }

  render() {
    console.log(countries);
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
                    {this.state.countries.map((element, idx) => {
                      return (
                        <div className="container">
                          <div className="row">
                            <div className="col-5">
                              <div className="list-group">
                                <Link
                                  className="list-group-item list-group-item-action"
                                  to={element.cca3}
                                >
                                  {element.flag} {element.name.common}
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
                    path="/:country"
                    render={props => {
                      console.log(props.match.params.country)
                      let selectedCountry = props.match.params.country;
                      let countries = [...this.state.countries];
                      countries = countries.filter(element =>
                        selectedCountry === element.cca3
                      )
                      console.log(countries);
                      return (
                        <CountryDetail
                          country={countries[0]}
                          borders={selected=> this.selectOneCountry(selected)}
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
