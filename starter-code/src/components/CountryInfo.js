import React, { Component } from 'react';
import countries from '../countries.json'

class CountryInfo extends Component {


  render() {
    const { cca3 } = this.props.match.params
    return (
      <div>
        {countries.map((country, index) => {
          if(country.cca3 === cca3) {
            return( 
            <div>
              <h1>{country.flag}</h1>
              <h2>{country.name.common}</h2>
            </div>
            )
          }
        })}
      </div>
    );
  }
}

export default CountryInfo;