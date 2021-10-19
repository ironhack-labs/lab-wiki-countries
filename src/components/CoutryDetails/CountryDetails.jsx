import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CountryDetails.css';

export default class CountryDetails extends Component {
  render() {
    const { countryCode } = this.props.match.params;
    const { countries } = this.props;
    const foundCountry = countries.find(
      (country) => country.cca3 === countryCode
    );

    const neighbors = foundCountry.borders.map((cca3) => {
      return countries.find((country) => country.cca3 === cca3);
    });

    return (
      <div className="country-details">
        <h2 id="country-name">{foundCountry.name.common}</h2>
        <div id="country-capital">Capital {foundCountry.capital[0]}</div>
        <div id="country-area">Area {foundCountry.area} ㎢</div>
        <div id="country-borders">
          <div className="country-borders-left-col">Borders</div>
          <div className="country-neighbors">
            <ul>
              {neighbors.map((country) => {
                return (
                  <Link key={country.cca3} to={`/list/${country.cca3}`}>
                    <li>{country.name.common}</li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
