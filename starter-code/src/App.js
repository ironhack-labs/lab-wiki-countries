import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import countries from "./countries.json";
import CountryDetail from "./CountryDetail";
import Country from "./Country";
import { Switch, Route } from 'react-router-dom';


export default class App extends React.Component{
  state = {
    // countriesClone: [...countries],
    countries: countries
  }
    
  render () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>

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
                <h1>Paises</h1>
                {this.state.countries.map((country, idx) => {
                      return (
                        <Country id= {country.cca3} name={country.name.common} flag={country.flag}></Country>
                      );
                    })}
              </div>
            </div>
            <Switch>
              <Route
                exact
                path="/:id"
                render={props => {
                  let id = props.match.params.id;
                  let countryClone = [...this.state.countries];
                  countryClone = countryClone.filter(country => id === country.cca3);
                  return (
                    <CountryDetail country={countryClone[0]} ></CountryDetail>
                    );
                }}
              />
            </Switch> 
          </div>
        </div>
      </div>
    </div>
  );
}
}

