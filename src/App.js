import React, { Component } from 'react'
import Navbar from './components/Navbar'
import { Switch, Route } from 'react-router-dom'
import CountriesList from './components/CountriesList'
import CountryDetail from './components/CountryDetail'



export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <CountriesList />
          <Switch>
            <Route exact path='/:cca3' component={CountryDetail} />
          </Switch>
      </div>
    )
  }
}


