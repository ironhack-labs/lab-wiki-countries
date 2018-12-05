import React, { Component } from "react";
// import logo from './logo.svg';
import { Link, Switch, Route } from 'react-router-dom';
import "./App.css";
import countries from "./countries.json";
import Menu from "./Components/Menu/Menu";
import CountryDetail from "./Components/CountryDetail/CountryDetail";

class App extends Component {
  constructor() {
    super();
    this.state = { countries: countries };
  }

  render() {


    return (
      <div className="App">
        <nav class="navbar navbar-dark bg-primary mb-3">
          <div class="container">
            <a class="navbar-brand" href="/">
              WikiCountries
            </a>
          </div>
        </nav>
        <div className="flex">
          <div
            className="col-5"
            style={{ maxHeight: "90vh", overflow: "scroll" }}
          >
            <Menu
              className="list-group-item list-group-item-action"
              countries={this.state.countries}
            />
          </div>
          <div className="col-7">
            <Switch>
              <Route exact path="/:id" component={CountryDetail} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
