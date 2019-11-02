import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import logo from './logo.svg';
import './App.css';
import file from './countries.json'
import SingleCountryInList from './components/SingleCountryInList'
import CountryDetail from './components/CountryDetail'

class App extends Component {

  render() {
    return (
      <div class="row">
        <div class="col-5">
          {file.map(country => <SingleCountryInList countryname={country.name.common} cca2={country.cca2} cca3={country.cca3} />)}
        </div>
        <div class="col-7"> <Route exact path="/CountryDetail/:id" component={CountryDetail} /> </div>
      </div>
    );
  }
}
export default App;
