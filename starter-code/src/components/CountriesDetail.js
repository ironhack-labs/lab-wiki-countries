import React, { Component } from 'react'
import countries from '../countries.json'
import DetailsCountry from './DetailsCountry'

export default class CountriesDetail extends Component {
  render() {
    const country = countries.find(country => this.props.match.params.id === country.cca3)
    const borders = country.borders.map(border => {
      return {
        name: countries.find(country => country.cca3 === border).name.official,
        cca3: border
      }
    })

    return country.name ? <DetailsCountry country={country} borders={borders} /> : null
  }
}
