import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import countries from "./countries.json";
import CountryDetail from "./CountryDetail";

class App extends Component {
  constructor(){
    super()
    this.state = {
      countries: countries
    }
  }
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
          <h2>WikiCountries</h2>
          <div className="container">
          </div>
        </nav>
        

        <Switch>
          <Route exact path="/" component={CountryDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
