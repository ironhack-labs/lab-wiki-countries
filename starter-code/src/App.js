import React, { Component } from "react";
import "./App.css";
import data from "./countries.json";
import { Switch, Route } from "react-router-dom";
import CountryDetails from './components/CountryDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Navbar */}
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">
              WikiCountries
            </a>
          </div>
        </nav>

        {/* Render the countries component */}
        <div>
          {/* <Switch>
            <Route exact path="/country/:name" render={(props)=> <CountryDetails {...props} countries={this.state.countries}/> }/>
          </Switch> */}
          <Countries countries={this.state.countries} />
        </div>
      </div>
  );
export default App;