import React from 'react';
import { Link } from 'react-router-dom';

import countriesInputList from '../countries.json'

const CountryDetails = (props) => {
  const countryId = props.match.params.countryId;
  

  const selectedCountry = countriesInputList.find((country) => {
    return country.cca3 === countryId;
  });

  const borderingCountries = countriesInputList
    .filter((country) => {
      return (
        selectedCountry.borders.findIndex((item) => {
          return item === country.cca3;
        }) >= 0
      );
    })
    .map((borderingCountry) => {
      return (
        <li>
          <Link to={borderingCountry.cca3}>{borderingCountry.name.common}</Link>
        </li>
      );
    });

  return (
    <div class="overflow-auto">
      <h1>{selectedCountry.name.common}</h1>
      <table className="table">
            <thead></thead>
            <tbody>
            <tr>
                <td className="capital">Capital</td>
                <td>{selectedCountry.capital[0]}</td>
            </tr>
            <tr>
                <td>Area</td>
                <td>
                {selectedCountry.area} km
                <sup>2</sup>
                </td>
            </tr>
            <tr>
                <td>Borders</td>
                <td>
                <ul>{borderingCountries}</ul>
                </td>
            </tr>
            </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;