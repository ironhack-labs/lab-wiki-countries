import React, { Component } from "react";
import "./App.css";
import countries from "./countries.json";
import { Link, Switch, Route } from "react-router-dom";
import CountryDetail from "./Components/CountryDetail";

class App extends Component {
  constructor() {
    super();

    this.myCountries = countries;

    this.state = {
      countries: this.myCountries
    };
  }

  render() {
    return (
      <div>
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
                style={{ maxHeight: "90vh", overflow: "scroll" }}
              >
                <div className="list-group">
                  {this.state.countries.map(country => {
                    return (
                      <Link
                        className="list-group-item list-group-item-action"
                        to={`/${country.cca3}`}
                      >
                        {country.flag} {country.name.common}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <Route exact path="/:cca3" component={CountryDetail} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
