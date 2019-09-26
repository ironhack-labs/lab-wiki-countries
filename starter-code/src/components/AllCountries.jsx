import React, { Component } from 'react';
import CountryItem from './CountryItem';

export default class AllCountries extends Component {
  render() {
    const countries = this.props.countries;
    return (
      <div>
        {countries.map(country => (
          <CountryItem country={country} key={country.cca3} />
        ))}
      </div>
    );
  }
}
