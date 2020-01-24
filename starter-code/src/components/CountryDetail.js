import React, { Component } from 'react';
import countries from '../countries.json';
import CountryLink from './CountryLink.js';

class CountryDetail extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    // console.log(this.props.match.params.cca3);
    const countryObj = countries.filter(country => country.cca3 === this.props.match.params.cca3)[0]

    return (
      <div>
        <h1>{countryObj.name.common}</h1>
        <hr></hr>
        <h3>Capital: {countryObj.capital}</h3>
        <hr></hr>
        <h3>Area: {countryObj.area}</h3>
        <hr></hr>
        <h3>Borders: {
          <ul>
            <CountryLink isBorder countries={countryObj} />
          </ul>
        }
        </h3>
      </div>
    )
  }
}

export default CountryDetail;