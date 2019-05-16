import React, { Component } from "react";
import "./App.css";
import countries from "./countries.json";

import { Link, NavLink, Switch, Route } from "react-router-dom";
import CountryDetail from "./Components/CountryDetail";

class App extends Component {
  state = {
    countries: countries
  };

  render() {
    let listOfCountries = this.state.countries.map((country, i) => {
      // console.log("country over here", country);
      return (
        <Link
          className="list-group-item list-group-item-action"
          to={`/country/${country.flag}`}
        >
          {country.flag}
          {country.name.common}
          
        </Link>
      );
    });

    return (
      <div className="App">
        <div id="root">
          <div>
            <nav class="navbar navbar-dark bg-primary mb-3">
              <div class="container">
                <a class="navbar-brand" href="/">
                  WikiCountries
                </a>
              </div>
            </nav>
            <div class="container">
              <div class="row">
                <div
                  class="col-5"
                  style={{ maxHeight: "90vh", overflow: "scroll" }}
                >
                  <div class="list-group">{listOfCountries}</div>
                </div>
                <Switch>
                  <Route path="/country/:id" component={CountryDetail} />
                </Switch>
                {/* <CountryDetail /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
