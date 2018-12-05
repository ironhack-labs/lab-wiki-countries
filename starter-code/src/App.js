import React, { Component } from "react";
import "./App.css";
import countries from "./countries.json";

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
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">
              WikiCountries
            </a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-5" style={{maxHeight : '90vh', overflow: 'scroll'}}>
              <div className="list-group">
                {this.state.countries.map(country => {
                  return (
                    <a
                      className="list-group-item list-group-item-action"
                      href={country.cca3}
                    >
                      {country.flag} {country.name.common}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
