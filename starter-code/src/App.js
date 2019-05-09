import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import countries from './countries.json'
import CountryDetail from './CountryDetail'
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="container">
        <h1 class="h1">WikiCountries</h1>
        <div className="row">
            <div className="col-md-3">
            {countries.map((country, index) => 
              <div key={index} className="list-group card">
                <Link  to={`/${country.cca3}`}>{country.flag} {country.name.common}</Link>
              </div>
            )}
        </div>
            <div className="col-md-9 card text-center">
            <Route exact path="/:id" component={CountryDetail} />
            </div>  
          </div>
          
        </div>
      
    );
  }
}

export default App;
