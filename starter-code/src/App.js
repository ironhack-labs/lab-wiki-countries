import React, { Component } from 'react'
import './App.css'
import CountryDetail from './CountryDetail/CountryDetail'
import countries from './countries.json'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

export default class App extends Component {
  state = {
    countries: [...countries],
  }
  render() {
    return (
      <div className="App">
        <div>
          <a>WikiCountries</a>
        </div>

        <div className="container">
          <div className="row">
            <div>
              {this.state.countries.map((country, idx) => (
                <Link
                  className=" list-group-item list-group-item-action"
                  key={idx}
                  to={country.cca3}
                >
                  {country.name.common}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex">
            <Route
              exact
              path="/:countryCode"
              render={(props) => {
                const countryCode = props.match.params.countryCode
                const countryIndex = this.state.countries.findIndex(
                  (country) => country.cca3 === countryCode
                )
                // //usar find index El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.
                return <CountryDetail country={this.state.countries[countryIndex]} />
              }}
            />
          </div>
        </div>
      </div>
    )
  }
}
