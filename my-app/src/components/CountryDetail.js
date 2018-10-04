import React, { Component } from 'react';
import countriesList from './countries.json';
import {Link} from 'react-router-dom';


class CountryDetail extends Component {
  render() {
    let cca3 = this.props.params.cca3

    let country = countriesList.filter(e => e.cca3.includes(cca3));

    return (
        <div>
            <h2>{country.name.official}</h2>
            <p>{country.capital}</p>
            <p>{country.area}</p>
            <p>{country.borders}<Link to={'/country/' + country.cca3}>{country.name.common}</Link></p>

        </div>
    )
      

  }
}

export default CountryDetail;

