import React, { Component } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countriesJson from './countries.json'
import {  Route } from 'react-router-dom'


export default class App extends Component {

  state = {
    countries: countriesJson
  }




  render() {
    return (
      <div>
        <Navbar />

        <div className='container'>
          <div className='row'>
            <CountriesList countries={ this.state.countries }/>
  
            <Route path='/:id' render={(props) => <CountryDetails {...props} countries={this.state.countries}/>} />
          </div>
        </div>
      </div>
    )
  }
}

