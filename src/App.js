import React, { Component } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import countriesJson from './countries.json'
import axios from 'axios'
import {  Route } from 'react-router-dom'


export default class App extends Component {

  state = {
    countries: []
  }

  componentDidMount (){

    axios
      .get('https://countries.tech-savvy.tech/countries')
      .then(countries => {
        console.log(countries.data)
        this.setState({
          countries: countries.data
        })
      })
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

