import React, { Component } from 'react'
import countries from '../countries.json'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';

export default class CountryDetail extends Component {
  state = {
    country: {}
  }

  componentDidMount() {
    const country = countries.find(
      country => country.cca3 === this.props.match.params.cca3
    )
    this.setState({ country })
  }

  onRouteChanged = () => {
    const country = countries.find(
      country => country.cca3 === this.props.match.params.cca3
    )
    this.setState({ country })
  }

  render() {

    const { country } = this.state
    console.log(country)
    return (
      <>
        <div>{country.flag}</div>
        <ul>
          <li>Capital: {country.capital}</li>
          <li>Area: {country.area}KM2</li>
        </ul>
        <ul class="list-group">
          {
            (country && country.borders) ?
              country.borders.map((country, i) => (
                <Link key={i} to={`/country/${country}`}>
                  <li class="list-group-item">{(countries.find(
                    elem => elem.cca3 === country
                  )).name.common}</li>
                </Link>
              )) :
              ''
          }
        </ul>
      </>
    )
  }

}