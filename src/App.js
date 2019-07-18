import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import countries from "./countries.json";
import CountryDetail from "./component/CountryDetail";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <Link className="navbar-brand" to="/">
              WikiCountries
            </Link>
          </div>
        </nav>

        <div className="container">
          <div className="row">
            <div className="col-5 scrollable">
              <div className="list-group">
                {countries.map((country, idx) => {
                  return (
                    <Link
                      key={idx}
                      className="list-group-item list-group-item-action"
                      to={`/countries/${country.cca3}`}
                    >
                      {country.flag} {country.name.common}
                    </Link>
                  );
                })}
              </div>
            </div>
            <Switch>
              <Route path="/countries/:cca3" component={CountryDetail} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
