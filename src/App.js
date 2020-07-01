// For images countries[i].tld[0] gives the externson for flag but have to remove '.'
import React, { Component } from 'react';
import countries from './countries.json'
import CountriesList from "./components/CountriesList"
import CountryDetail from "./components/CountryDetail"
import 'bootstrap/dist/css/bootstrap.css';

console.log(countries[9])
class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">WikiCountries</a>
          </div>
        </nav>
        <CountriesList/>
      </div>
    );
  }
}

export default App;