import React, { Component } from 'react'
import CountryList from '../countries.json'
import { Link } from 'react-router-dom'

export default class Countries extends Component {
  state = {
    allCountries: CountryList,
  }

  render() {
    return (
      <div>
        <div class="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
          <div class="list-group">
            {this.state.allCountries.map((country) => (
              <Link to={`/${country.cca3}`}>
                {country.flag}
                <h4>{country.name.common}</h4>
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
