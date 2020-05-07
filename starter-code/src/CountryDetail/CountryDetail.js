import React, { Component } from 'react'

export default class CountryDetail extends Component {
  render() {
    return (
      <div class="col-5">
        <h1>{this.props.country.name.common}</h1>
        <div>
          <h1>Capital</h1>
          <p>{this.props.country.capital}</p>
          <p>Area</p>
          <p>{this.props.country.area} km</p>
          <p>Borders</p>
        </div>
      </div>
    )
  }
}
