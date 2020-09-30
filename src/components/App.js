import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import './App.css'

import countriesList from '../countries.json'
import NavBar from './layout/NavBar'
import CountriesList from './pages/CountriesList'
import CountryDetails from './pages/CountryDetails'

class App extends Component {

  constructor() {
    super()
    this.state = {
      countries: countriesList
    }
  }

  render() {
    return (
      <>
        <NavBar />
        <div className="container">
          <div className="row">
            <CountriesList countries={this.state.countries} />
            <Switch>
              <Route path='/:country' render={props => <CountryDetails {...props} countries={this.state.countries} /> } />
            </Switch>
          </div>
        </div>
  
      </>
    )
  }

  componentDidMount = () => this.interval = setInterval(this.count, 100)
}

export default App
