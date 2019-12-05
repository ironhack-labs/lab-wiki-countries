import React, { Component } from "react";
import "./App.css";
import countries from "./countries.json";
import "bootstrap/dist/css/bootstrap.css";
import CountryDetail from "./components/CountryDetail";

import { Switch, Route, Link } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: countries
    };
  }

  render() {
    return (
      <div>
        <nav class="navbar navbar-dark bg-primary mb-3">
          <div class="container">
            <a class="navbar-brand" href="/">
              WikiCountries
            </a>
          </div>
        </nav>

        <div class="container">
          <div class="row">
            <div class="col-5">
              <div class="list-group">
                {this.state.countries.map((theCountries, idx) => {
                  return (
                    <Link
                      className="list-group-item list-group-item-action"
                      key={idx}
                      to={"/" + theCountries.cca3}
                    >
                      {theCountries.flag} {theCountries.name.official}
                      {theCountries.area}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <>
          <CountryDetail />
        </>
      </div>
    );
  }
}

export default App;
