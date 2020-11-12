import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class CountriesList extends Component {
    render() {
        return (
            <div>
              <h2>Countries:</h2>
              {this.props.countries && this.props.countries.map((country, index) => {
                return (
                  <div key={index}>
                    <img src={`https://www.countryflags.io/${country.cca2}/flat/64.png`} alt={country.name.common} />
                    <Link to={`/countries/${country.cca3}`}>{country.name.common}</Link>
                  </div>
                );
              })}
            </div>
          );
    }
}

export default CountriesList
