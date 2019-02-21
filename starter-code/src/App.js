import React, { Component } from "react";
import "./App.css";
import CountryList from "./components/CountryList";
import CountryDetail from "./components/CountryDetail";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
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
              <div class="col-5">
                <div class="list-group">
                  <CountryList />
                </div>
              </div>
              <div class="col-7">
                <Switch>
                  <Route path="/:countryId" component={CountryDetail} />
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
