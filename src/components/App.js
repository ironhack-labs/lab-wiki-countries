import './App.css';
import Navbar from "./Navbar"
import CountriesList from "./CountriesList"
import CountryDetails from './CountryDetails'

import { Route } from 'react-router-dom'

import countries from "./countries.json"
import { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      countries: []
    }
  }

  componentDidMount() {
    let mappedCountries = {}

    countries.forEach(elem => {
      mappedCountries[elem.cca3] = elem
    })

    this.setState({
      countries: mappedCountries
    })
  }

  render() {
    return (
      <div className="App" >
        <Navbar />

        <div className="container">
          <div className="row">
            <CountriesList countries={countries} />

            <Route path="/:cca3" render={props => <CountryDetails countries={countries} {...props} />} />

          </div>
        </div>
      </div>
    )
  }

}

export default App;