import React from 'react';
import { Link } from 'react-router-dom';
import countriesJSON from '../countries.json';

export const CountryDetails = ({ country }) => {
  const countries = [...countriesJSON];

  const borderCountries = (borderCountry) => {
    const country = countries.filter(
      (country) => country.cca3 === borderCountry
    );
    return country.name;
  };
  return (
    <div class="col-7">
      <h1>{country.name.common}</h1>
      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map((borderCountry) => {
                  <li>
                    <Link to={`/${borderCountry}`}>
                      {borderCountries(borderCountry)}
                    </Link>
                  </li>;
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
