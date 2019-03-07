import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CountryDetail from "./components/CountryDetail";
import allCountries from "./countries.json";
import { NavLink, Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCountriesArray: allCountries
    };
  }
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <div className="navbar-brand">WikiCountries</div>
          </div>
        </nav>
        <div className="row">
          <div
            className="col-5"
            style={{ maxHeight: "90vh", overflow: "scroll" }}
          >
            <div className="list-group">
              {this.state.allCountriesArray.map(eachCountry => {
                return (
                  // <div className="scroll">
                  <NavLink
                    to={`/${eachCountry.cca3}`}
                    // activeClassName="active"
                    key={eachCountry.cca3}
                    className="list-group-item list-group-item-action"
                  >
                    {eachCountry.flag}
                    {eachCountry.name.common}
                  </NavLink>
                  // </div>
                );
              })}
            </div>
          </div>
          <div className="col-sm-7">
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
