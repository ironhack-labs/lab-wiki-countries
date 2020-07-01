// For images countries[i].tld[0] gives the externson for flag but have to remove '.'
import React, { Component } from 'react';
import countries from './countries.json'
import CountriesList from "./components/CountriesList"
import CountryDetail from "./components/CountryDetail"
import 'bootstrap/dist/css/bootstrap.css';
import { Switch, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <Link className="navbar-brand" to="/">WikiCountries</Link>
          </div>
        </nav>
        <CountriesList/>
      </div>
    );
  }
}

export default App;