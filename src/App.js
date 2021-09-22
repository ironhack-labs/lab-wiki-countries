import './App.css'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Countries from './components/CountriesList/CountriesList'
import CountriesDetails from './components/CountryDetails/CountryDetails'
import Countrie from './countries.json'


import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      countries: []
    }
  }
  componentDidMount() {
    this.setState({
      ...this.state,
      countries: Countrie
    })
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row justify-content-around">
            <Countries />
            <Switch>
              <Route path="/countrydetails/:cca3" render={(props) => <CountriesDetails {...props} />} />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

export default App