import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import countries from "./countries.json";
import CountryDetail from "./CountryDetail.js";
import { Switch, Route, Link, Redirect } from "react-router-dom";

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      countries: countries,
      currentCountry: null
    }
  }

  render() {
    const country = countries.map((country, idx) => {
      return (
        <Link to={`/countrydetail/${country.cca3}`} key={idx} onClick="">
          <div className="list-group-item list-group-item-action">
            <span role="img" aria-label="emojiflag">
              {country.flag}
            </span>
            <p>{country.name.common}</p>
          </div>
        </Link>
      );
    });
    return (
      <div className="App">
        <header className="App-header">
          <h1>WikiCountries</h1>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div className="list-group">{country}</div>
            </div>
            <Route path="/countrydetail/:id"/>
            <CountryDetail />
          </div>
        </div>
      </div>
    );
  }
}