import './App.css';
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import countriesJSON from './countries.json';

export default class App extends Component {
  state = {
    countries: []
  }

  componentDidMount() {
    this.setState({
      countries: countriesJSON
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div style={{display:"flex"}}>
          <CountriesList countries={this.state.countries}/>
          <Route exact path="/countrydetails/:id" component={CountryDetails}/>
        </div>
    </div>
    )
  }
}

