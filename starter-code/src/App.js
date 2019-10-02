import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import countries from "./countries.json";
import Country from "./Country";
import CountryDetail from "./CountryDetail";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      countries: countries
    };
  }

  getCountry(cca3) {
    let selectedCountry = this.state.countries.filter(country => {
      return country.cca3 === cca3;
    });
    console.log(selectedCountry)
    return selectedCountry[0];
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
        <div className="row">
          <div
            className="col-5"
            style={{ maxHeight: "90vh", overflow: "scroll" }}
          >
            <div className="list-group">
              {this.state.countries.map((country, idx) => (
                <Country key={idx} {...country}></Country>
              ))}
            </div>
          </div>
          <div className="col-7">
            <Switch>
              <Route
                exact
                path="/:country"
                render={props => {
                  let selectedCountry = this.getCountry(props.match.params.country);
                  
                  // console.log(selectedCountry);
                  // console.log(props.match.params.country);
                  return (
                    <CountryDetail getCountry={(cca3) => this.getCountry(cca3)} {...selectedCountry}></CountryDetail>
                  );
                }}
              ></Route>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
