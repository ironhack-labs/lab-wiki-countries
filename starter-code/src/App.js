import React, { Component } from 'react';
import './App.css';
import Countries from './countries.json'
import CountryDetails from './component/CountryDetail';
import {Route, Link} from "react-router-dom";


class App extends Component {
  constructor (props) {
  super(props);
  this.state = {
    Countries: Countries
   }
  }
  render() {
    const countriesList = Countries.map((country) => {
      return (
       <Link className="list-group-item list-group-item-action" to={`/details/${country.cca3}`}>{country.flag} {country.name.common}</Link>
       
      )
      })
    return (
      <div>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>
      <div class="container">
        <div class="row">
          <div class="col-5" style={ {maxHeight: '90vh', overflow: 'scroll'}}>
            <div class="list-group">
              {countriesList}
            </div>
          </div>
          <div class="col-7">
          <Route path="/details/:someId" component={CountryDetails} />
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
