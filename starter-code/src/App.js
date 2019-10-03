import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
// import { Link } from "react-router-dom";
import countries from "./countries.json";
import CountryBox from "./CountryBox";
import CountryDetail from "./CountryDetail";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      countries
    };
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact path="/"
            render={() => {
              return (
                <ul>
                  {this.state.countries.map((country, idx) => {
                    return <CountryBox key={idx} {...country}></CountryBox>;
                  })}
                </ul>
              );
            }}
          />
          <Route
            path="/:cca3"
            render={props => {
              let params = props.match.params.cca3;
              let filteredCountries = this.state.countries.filter(country =>
                country.cca3.includes(params)
              );
              return (
                <div>
                  <ul>
                  {this.state.countries.map((country, idx) => {
                    return <CountryBox key={idx} {...country}></CountryBox>;
                  })}
                </ul>
                <CountryDetail
                  selectedCountry={filteredCountries[0]}
                  allCountries={this.state.countries}
                />
                </div>
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}
