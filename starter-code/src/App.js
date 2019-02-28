import React, { Component } from 'react';
import './App.css';
import CountryList from './components/CountryList';
import countries from './countries.json'
class App extends Component {
  render() {
    return (
      <div>
        <span className="navbar-brand mb-0 h1" >WikiCountries</span>
        <CountryList countries = {countries} />
      </div>
    );
  }
}

export default App;
