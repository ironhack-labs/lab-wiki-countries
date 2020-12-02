import Navbar from './Navbar'
import CountriesList from './ContriesList'
import CountriesDetails from './CountryDetails'
import './App.css'

import React, { Component } from 'react'
import { Switch, Route, } from 'react-router-dom'
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      countries:[]
    }
  }

  componentDidMount = () => {
    axios
      .get('https://countries.tech-savvy.tech/countries')
      .then(res => this.setState({ countries: res.data }))
  }

  render() {
    return(
    <>
      <Navbar title='WikiCountries' />
      
      <CountriesList countries={this.state.countries} />
      <main class='main'>
        <Switch>
          <Route path='/:countryCode' render={props => <CountriesDetails countries={this.state.countries}  {...props} />} />
        </Switch>
      </main>
      </>
    )
  };
}

export default App;
