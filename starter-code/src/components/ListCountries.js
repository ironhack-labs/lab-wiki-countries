import React, { Component } from 'react'
import CountryDetails from './CountryDetail';
import { Switch, Link, Route } from 'react-router-dom'
import countries from '../countries.json'

export default class ListCountries extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
            <div className="list-group">
              {countries.map((country) => {
                return <Link to={country.cca3} ><p onClick={this.showCountry} id={country.cca3} className="list-group-item list-group-item-action">
                  {country.flag} {country.name.common}
                </p>
                </Link>
              })}
            </div>
          </div>
          <div className="col-7">
            <Switch>
              {countries.map((country) => {
                return <Route
                  path={'/'+country.cca3}
                  render={() => <CountryDetails showCountry={this.showCountry} countryCode={country.cca3} />}
                />
              })}
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}


