import React from 'react';
import { Link } from 'react-router-dom';

import countries from '../countries.json';

const CountryDetails = (props) => {
  const { cca3 } = props.match.params;

  const country = countries.find((country) => country.cca3 === cca3);

  return (
    <div class="col-7">
      <h1>{country.name && country.name.common}</h1>
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
                {country.borders.map((cca3) => {
                  return (
                    <li key={cca3}>
                      <Link to={'/countries/' + cca3}>
                        {
                          countries.find((country) => {
                            return country.cca3 === cca3;
                          }).name.common
                        }
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
