import React, { Component } from "react";
import "./App.css";
import countries from "./countries.json";
import { Link, Switch, Route } from 'react-router-dom';
import CountryDetails from "./CountryDetail/CountryDetail";

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: countries
    };
  }

  render() {
    return (
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
                {/* <img src={this.country.flag.common}/> */}
                  {this.state.countries.map((country, i) => (
                    <Link className="list-group-item list-group-item-action" to={country.cca3}>
                      {country.flag}
                      {country.name.common}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="col-7">
                <Route exact path="/:cca3" component={CountryDetails} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
