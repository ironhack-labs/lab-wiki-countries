import React, { Component } from "react";
import "./App.css";
import "./components/ListCountries/ListCountries";
import ListCountries from "./components/ListCountries/ListCountries";
import countries from "./countries.json";
import CountryDetails from "./components/CountryDetail/CountryDetail";

import { Switch, Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: countries
    };
  }

  render() {
    return (
      <div className="App">
        <nav className="nav-bar">
          <div>WikiCountries</div>
        </nav>
        <div className="main">
          <div>
            {this.state.countries.map((countrie, index) => (
              <ListCountries key={index} {...countrie} />
            ))}
          </div>
          <div className="detail">
              <Route exact path="/CountryDetail/:id" component={CountryDetails} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
