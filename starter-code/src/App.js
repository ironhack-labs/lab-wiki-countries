import React, { Component } from "react";
import "./App.css";
import data from "./countries.json";
import { Switch, Route } from "react-router-dom";
import CountryDetails from './components/CountryDetails';

class App extends Component {
  state = {
    countries: [...data]
  };

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">
              WikiCountries
            </a>
          </div>
        </nav>
        <div>
          <Switch>
            <Route exact path="/country/:name" render={(props)=> <CountryDetails {...props} countries={this.state.countries}/> }/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
