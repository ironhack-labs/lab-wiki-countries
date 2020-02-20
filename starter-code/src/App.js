import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import countries from './countries.json'
import CountryDetail from './CountryDetail'
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div >
        <h1 className="h1">WikiCountries</h1>
        <div>
            <div>
            {countries.map((country, index) => 
              <div key={index}>
                <Link  to={`/${country.cca3}`}>{country.flag} {country.name.common}</Link>
              </div>
            )}
        </div>
            <div>
            <Route exact path="/:id" component={CountryDetail} />
            </div>  
          </div>
          
        </div>
      
    );
  }
}

export default App;