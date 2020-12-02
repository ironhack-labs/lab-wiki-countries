import React, { Component } from 'react'
import './App.css';
import countries from './../countries.json'
import Navbar from './Navbar'
import CountriesList from './CountriesList'
import CountriesDetails from './CountryDetails'
import { Route, Switch, Link } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      countries: countries
    }
  }

render() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <CountriesList countries={this.state.countries} />
        <Link to='/:cca3'>{this.state.countries.name}</Link>
        
      <Switch>
      <Route path='/:cca3' render={() => <CountriesDetails/>} />
        </Switch>
        </div>
      </div>
  )
}
}


export default App;
