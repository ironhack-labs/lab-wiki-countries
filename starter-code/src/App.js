import React, { Component } from "react";
import { Switch, Route, NavLink, Link } from "react-router-dom";

import "./App.css";
import allCountries from "./countries.json";

import CountryDetail from "./components/CountryDetail";
import NotFound from "./components/NotFound";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { countryArray: allCountries };
  }

  render() {
    const { countryArray } = this.state;

    return (
      <div className="App container">
        <nav class="navbar navbar-dark bg-primary">
          <Link class="navbar-brand" to="/">
            Wiki Countries
          </Link>
        </nav>

        <div className="row">
          {/* Left Panel */}
          <div className="col-5">
            <div className="list-group">
              {countryArray.map((oneCountry, index) => {
                return (
                  <NavLink
                    key={index}
                    to={`/country-detail/${oneCountry.cca3}`}
                    className="list-group-item list-group-item-action"
                  >
                    <span>{oneCountry.flag}</span> {oneCountry.name.common}
                  </NavLink>
                );
              })}
            </div>
          </div>

          {/* Right Panel */}
          <div className="col-7">
            <Switch>
              <Route exact path="/" />
              <Route
                path="/country-detail/:countryId"
                component={CountryDetail}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
