import React, { Component } from 'react';
import Country from './Country'
import countries from '../countries.json'


class CountryList extends Component {

  state = {
    countries: [...countries]
  }

  render() {

    const { countries } = this.state;

    return (
      <div>
        {countries.map((country, index) => (
          <Country 
            key={index}
            name={country.name.common}
            flag={country.flag}
            cca3={country.cca3}
          />
        ))}
      </div>
    );
  }
}

export default CountryList;