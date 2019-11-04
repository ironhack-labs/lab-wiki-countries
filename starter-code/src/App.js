import React, { Component } from 'react';
import './App.css';
import CountryList from './components/CountryList';
import CountryDetail from './components/CountryDetail';
import NavbarBrand from './components/NavbarBrand'
import { Route } from 'react-router-dom';
import countries from './countries.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarBrand brand="WikiCountries" />
        <div className="row">
          <Route 
          path='/' 
          render={props => <CountryList {...props} countries={countries} />}
          />
          <Route 
          exact path='/:cca3' 
          render={props => <CountryDetail {...props} countries={countries} />}
          />
        </div>
      </div>
    )
  }
}

export default App;
