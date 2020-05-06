import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Switch, Route } from 'react-router-dom'

import countries from './countries.json'
import CountryDetail from './country/CountryDetail'
import CountriesList from './country/CountriesList'

class App extends Component {

  constructor() {
    super()
    this.state = {
      currentCountry: {}
    }
  }

  findCountry = (cca3) => {
    this.setState({ currentCountry: countries.find(elm => elm.cca3 === cca3) })
  }

  getCountryName = (cca3) => countries.find(elm => elm.cca3 === cca3).name.common

  render() {
    return (
      <>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <h1 className="navbar-brand">WikiCountries</h1>
          </div>
        </nav>

        <section className="container">
          <div className="row">

            <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
              <CountriesList findCountry={this.findCountry} countries={countries} />
            </div>

            <div className="col-7">
              <Switch>
                <Route path="/:cca3" exact render={props => <CountryDetail getCountryName={this.getCountryName} findCountry={this.findCountry} country={this.state.currentCountry} {...props} />} />
              </Switch>
            </div>
          </div>
        </section>
      </>
    )
  }

}

export default App