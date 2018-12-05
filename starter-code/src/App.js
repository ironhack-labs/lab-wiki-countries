import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import countries from './countries.json'

import { Switch, Route, Link } from 'react-router-dom';
import CountryDetail from "./components/CountryDetail/CountryDetail";

class App extends Component {
  findCountry = id => countries.filter(country => country.cca3 === id)[0]

  render() {
    let options = countries.map(country => 
      <Link to={`/${country.cca3}`} className="list-group-item list-group-item-action">{country.flag} {country.name.common}</Link>
    )

    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <Link className="navbar-brand" to="/">WikiCountries</Link>
          </div>
        </nav>

        <div className="container">
          <div className="row">
            <div className="col-5 select-countries">
              <div className="list-group">
                {options}
              </div>
            </div>
            <div className="col-7">
            <Switch>
              <Route exact path='/:id' render={routerProps => {
                const id = routerProps.location.pathname.slice(1,routerProps.location.pathname.length);
                return <CountryDetail teo="holaTeo" country={this.findCountry(id)} findFnc={this.findCountry}/>}}  />
                }
            </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
