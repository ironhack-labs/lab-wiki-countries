import React, { Component } from 'react'
import countries from './countries.json'
import { Link } from 'react-router-dom'
import CurrentCountry from './CurrentCountry'

export default class CountryDetail extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-5" style={{ maxHeight: '90vh', overflowY: 'scroll' }}>
            <div className="list-group">
              {countries.map(country => (
                <Link
                  className="list-group-item list-group-item-action"
                  key={country.cca3}
                  to={'/' + country.cca3}
                >
                  {country.flag} {country.name.official}
                </Link>
              ))}
            </div>
          </div>
          {this.props.match !== '' &&
          this.props.match.params !== '' &&
          this.props.match.params.country !== '' ? (
            <CurrentCountry country={this.props.match.params.country} />
          ) : null}
        </div>
      </div>
    )
  }
}
