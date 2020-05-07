import React, { Component } from 'react'
import countries from '../countries.json'
import Countries from '../components/Countries'

class CountryDetail extends Component {
  state = {
    countries,
  }
  render() {
    return (
      <div>
        <h2>Countries</h2>
        {this.state.countries.map((country) => (
          <Countries data={country} />
        ))}
      </div>
    )
  }
}

export default CountryDetail
