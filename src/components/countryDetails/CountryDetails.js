import React, { Component } from 'react';
import { Link } from "react-router-dom";
import countries from '../../countries.json';

class CountryDetails extends Component {
  state = {
    countries: [...countries],
  }  

  render() {

    const { countries } = this.state;
    const id = this.props.match.params.id;
    const selectedCountry = countries.filter((country) => country.cca3 === id);
    const borderingCountries = selectedCountry[0].borders;

    const borders = countries.filter((country) => {
      return borderingCountries.indexOf(country.cca3) !== -1;
    });

    const listCountries = () => {
      return borders.map((border) => {
        return <li><Link to={`/${border.cca3}`} >{border.name.official}</Link></li>
      });
    };

    console.log(borders);

    return (
      <div>
        <h1>{selectedCountry[0].name.official}</h1>
        <div class="section-container">
          <p class="section-name">Capital</p>
          <p class="section-content">{selectedCountry[0].capital[0]}</p>
        </div>
        <div class="section-container">
          <p class="section-name">Area</p>
          <p class="section-content">{selectedCountry[0].area} Square Km</p>
        </div>
        <div class="section-container">
          <p class="section-name">Borders</p>
          <ul class="section-content-list">
            {listCountries()}
          </ul>
        </div>
      </div>
    )
  }
}

export default CountryDetails;
