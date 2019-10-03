import React, { Component } from "react";
import "./App.css";
import countries from "./countries.json";
import CountryList from "./components/CountryList";
import CountryDetail from "./components/CountryDetail";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries
    };
  }

  render() {
    return (
      <div>
        <div>
          <nav class="navbar navbar-dark bg-primary mb-3">
            <div class="container">
              <a class="navbar-brand" href="/">
                WikiCountries
              </a>
            </div>
          </nav>
          <div className="container">
            <div className="row">
              <div className="col-5">
                {
                  this.state.countries.map( (country, i) => 
                   (
                     <CountryList 
                       key={i} 
                       className="list-group-item list-group-item-action"
                       to={`/${country.cca3}`}>{country.flag} {country.name.official}</CountryList>
                   ))
                   }
              </div>
              <div className="col-7">
                <Switch>
                  <Route exact path="/:cca3" component={CountryDetail} />
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
