import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import countries from "./countries.json";
import CountryDetail from "./CountryDetail";
import CountrySpecs from "./CountrySpecs";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: countries
    };
  }

  render = () => {
    return (
      <div className="App">
        <nav class="navbar navbar-dark bg-primary mb-3">
        <div class="container">
          <a class="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>
    
        <section>
          <div class="row">
            <div class="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
              {this.state.countries.map((country, idx) => (
                <CountryDetail
                  key={idx}
                  href={country.cca3}
                >
                  {country.flag}
                  {country.name.official}
                </CountryDetail>
              ))}
            </div>
            <div class="col-7">
              
            <Route
              exact
              path="/:country"
              render={props => {
                let chosenCountry = this.state.countries.filter(
                  country => country.cca3 === props.match.params.country
                )[0];
                return (
                  <CountrySpecs
                    name={chosenCountry.name.official}
                    capital={chosenCountry.capital}
                    area={chosenCountry.area}
                    borders={chosenCountry.borders}
                  ></CountrySpecs>
                );
              }}
            />




            </div>
          </div>
          




          
        </section>
      </div>
    );
  };
}
