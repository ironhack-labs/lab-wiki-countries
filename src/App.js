import './App.css';
import countriesJSON from './countries.json'
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import CountryDetails from './components/CountryDetails';

class App extends Component {
  
  state = {
    countries : countriesJSON
  }
  
  render () {
    console.log(this.state.countries.length)
    return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={this.state.countries} />
          <Route exact path={'/countries/:countryCode'} render={ (props) => <CountryDetails countries={this.state.countries} {...props} />} />
        </div>
      </div>
    </div>
    )};
}

export default App;
