import React, { Component } from "react";
import "./App.css";
import countries from "./countries.json";
import CountryDetails from "./CountryDetail";
import { Link } from "react-router-dom";

import { Switch, Route } from "react-router-dom";

export const countriesList = countries;

class App extends Component {
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
                    {countriesList.map((eachCountry, index) => {
                      return (
                        <Link
                          key={index}
                          to={`/countries/${eachCountry.cca3}`}
                          className="list-group-item list-group-item-action"
                        >
                          {eachCountry.name.common}
                        </Link>
                      );
                    })}
                  </div>
                </div>
                <Switch>
                  <Route
                    exact
                    path="/countries/:id"
                    component={CountryDetails}
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

export default App;
