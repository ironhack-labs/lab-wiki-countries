import React, { Component } from "react";
import { Switch, Route, NavLink, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import CountryDetail from "./CountryDetail";
import "bootstrap/dist/css/bootstrap.css";
import allCountries from "./countries.json";

function countryAddress(country) {
  return `/country/${country.cca3}`;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryArray: allCountries
    };
  }

  render() {
    const { countryArray } = this.state;

    return (
      <div className="App">
        <header>
          <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
              <NavLink exact to="/" className="navbar-brand">
                WikiCountries
              </NavLink>
            </div>
          </nav>
        </header>

        <div className="container">
          <div className="row">
            <div
              className="col-5"
              style={{ maxHeight: "90vh", overflow: "scroll" }}
            >
              <div className="list-group">
                {countryArray.map(oneCountry => {
                  return (
                    <div key={oneCountry.cca3}>
                      <h3>
                        <NavLink
                          to={countryAddress(oneCountry)}
                          className="list-group-item list-group-item-action"
                        >
                          {oneCountry.flag}
                          {oneCountry.name.common}
                        </NavLink>
                      </h3>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="col-7">
              <Switch>
                <Route path="/country/:countryId" component={CountryDetail} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
