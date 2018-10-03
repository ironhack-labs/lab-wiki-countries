import React, { Component } from 'react';
import countriesList from './countries.json';
import {Link} from 'react-router-dom';


class CountryDetail extends Component {
  render() {
    let cca3 = this.props.match.params.cca3

    let country = countriesList.filter(e => e.cca3.includes(cca3));
    
    let name = country.name.official
    let capital = country.capital
    let area = country.area
    let borders = country.borders

    return (
        <div>
            <h2>{name}</h2>
            <p>{capital}</p>
            <p>{area}</p>
            <p>{borders}<Link to={'/country/' + country.cca3}>{country.name.common}</Link></p>

        </div>
    )
      

  }
}

export default CountryDetail;

