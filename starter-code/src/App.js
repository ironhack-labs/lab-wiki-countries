import React, { Component } from "react";
import countries from "./countries.json";
import CountryList from "./components/CountryList";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import CountryDetail from "./components/CountryDetail";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar">
          <h1>WikiCountries</h1>
        </nav>
        <div className="main-wrapper">
          <CountryList countries={countries} />
          <Switch>
            <Route path="/:CountryDetail" component={CountryDetail}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
