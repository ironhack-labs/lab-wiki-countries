import countries from '../countries.json';
import { Switch, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';

class CountriesList extends Component {
  showCountries = () => {
    let arr = countries.map(eachCountry => {
      return (
        <li>
          <Link to={`/countries/${eachCountry.cca3}`}>
            {eachCountry.name.common}
          </Link>
        </li>
      );
    });
    return arr;
  };
  render() {
    console.log(countries);
    return <div>{this.showCountries()}</div>;
  }
}

export default CountriesList;
