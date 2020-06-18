import React, { Component } from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

export default class CountriesList extends Component {
  // let lowercca2 = {this.country.cca2}.toLowerCase()
  state = {
    countries: countries,
  };
  render() {
    return (
      <div>
        {this.state.countries.map((country, index) => {
          return (
            <ul className="list-group" key={index}>
              <Link
                className="list-group-item"
                to={`/countries/${country.cca3}`}
              >
                {/* <img src= `https://www.countryflags.io/${lower}/flat/64.png` alt="not working"></img> */}
                {country.name.official}
              </Link>
            </ul>
          );
        })}
      </div>
    );
  }
}
