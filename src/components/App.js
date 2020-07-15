import React, { Component } from 'react'
import countries from "../countries.json"

import { Switch, Route } from "react-router-dom"

import Navbar from "./Navbar/Navbar"
import CountriesList from "./CountriesList/CountriesList"
import CountryDetail from "./CountryDetail/CountryDetail"

class App extends Component {
  constructor() {
    super()
    this.state = {
      countries,
    }
  }
  changeSelectedCountry = newCountryCode => {
    const countryToRender = countries.find(country => country.cca3 === newCountryCode)
    const borderCountries = countryToRender.borders.map(letters => countries.find(country => country.cca3 === letters))
    const borderCountriesInfo = borderCountries.map(country => ({ name: country.name.common, code: country.cca3 }))
    return { countryToRender, borderCountriesInfo }

  }
  render() {
    return (
      <>
        <Navbar />
        <main>
          <div className="container">
            <div className="row">
              <CountriesList countries={this.state.countries} changeSelectedCountry={this.changeSelectedCountry} />
              <Switch>
                <Route path="/:countryID" render={props => <CountryDetail countryInfo={this.changeSelectedCountry(props.match.params.countryID)} />} />
              </Switch>
            </div>
          </div>
        </main>

      </>
    )
  }
}

export default App
