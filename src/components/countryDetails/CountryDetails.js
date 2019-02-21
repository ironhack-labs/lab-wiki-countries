import React, { Component } from 'react';
import { Link } from "react-router-dom";
import countries from '../../countries.json';

class CountryDetails extends Component {
  state = {
    countries: [...countries],
  }  

  render() {

    const { countries } = this.state;
    const { id } = this.props.match.params;
    const selectedCountry = countries.filter((country) => country.cca3 === id);
    const borderingCountries = selectedCountry[0].borders;

    const borders = countries.filter((country) => {
      return borderingCountries.indexOf(country.cca3) !== -1;
    });

    const listCountries = () => {
      return borders.map((border, index) => {
        return <li><Link key={`${border.name.official}-${index}`} to={`/${border.cca3}`} >{border.name.official}</Link></li>
      });
    };

    console.log(borders);

    return (
      <div>
        <h1>{selectedCountry[0].name.official}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td>Capital</td>
              <td>{selectedCountry[0].capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{selectedCountry[0].area} km
                <sup>2</sup>
              </td>
            </tr>
            {(borderingCountries.length > 0 ?
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {listCountries()}
                </ul>
              </td>
            </tr>
            : null)}
          </tbody>
        </table>
      </div>
    )
  }
}

export default CountryDetails;
