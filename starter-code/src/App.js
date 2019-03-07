import React, { Component } from "react";
import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import countries from "./countries.json";
import CountryDetail from "./components/CountryDetail.js";

class App extends Component {
  render() {
    return (
      <div className="App">
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
                style={{ maxHeight: "90vh", overFlow: "scroll" }}
              >
                <div className="list-group">
                  {countries.map((country, index) => {
                    return (
                      <NavLink
                        to={`/countries/${country.cca3}`}
                        className="list-group-item list-group-item-action"
                      >
                        {country.flag}
                        {country.name.common}
                      </NavLink>
                    );
                  })}
                </div>
              </div>

              <div className="col-7">
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={() => {
                      return <p>Bonjour, clique sur un pays a gauche</p>;
                    }}
                  />
                  <Route path="/countries/:id" component={CountryDetail} />
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
