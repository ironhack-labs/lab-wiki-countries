import React, { Component } from "react";
import "./App.css";
import countries from "../src/countries";
import { NavLink } from "react-router-dom";

//console.log(countries);

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
        <nav class="navbar navbar-dark bg-primary mb-3">
          <div class="container">
            <a class="navbar-brand" href="/">
              WikiCountries
            </a>
          </div>
        </nav>
        <ul>
          {this.state.countries.map((elm, idx) => {
            return (
              <li>
                <NavLink to="/">
                  {idx} {elm.name.common} {elm.flag}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
