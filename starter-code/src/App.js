import React, { Component } from 'react';
import './App.css';
import CountryDetails from './components/CountryDetail';
import countries from './countries.json';
import { Link, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1 className='App-h1'>WikiCountries</h1>
        <div className="row App-body">
          <ul className="list-group App-main-countries-list">
            {countries.map((country, index) => (
              <li className="list-group-item list-group-item-action App-country" key={index}><Link style={{ textDecoration: 'none', color: 'black'}} to={`/${country.cca3}`}>{country.flag} {country.name.common}</Link></li>
            ))}
          </ul>
          <Route exact path='/:id' component={CountryDetails} />
        </div>
      </div>
    );
  }
}

export default App;
