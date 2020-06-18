import React from 'react';

import { Link } from 'react-router-dom';

import countries from '../countries.json';

export default function CountryDetail(props) {
  let id = props.match.params.countryCode;

  let country = countries.find((country) => {
    return country.cca3 === id;
  });

  let tdStyle = {
    width: '30%',
  };

  let defaultCountry = countries[0];

  return (
    <div className="col-7">
      <h1>{!id ? defaultCountry.name.common : country.name.common}</h1>
      <table className="table">
        <tbody>
          <tr>
            <td style={tdStyle}>Capital</td>
            <td>{!id ? defaultCountry.capital : country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {!id ? defaultCountry.capital : country.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {!id
                  ? defaultCountry.borders.map((border, index) => {
                      let borderCountry = countries.find((country) => {
                        return country.cca3 === border;
                      });

                      return (
                        <li key={index}>
                          <Link to={`/${border}`}>
                            {borderCountry.name.common}
                          </Link>
                        </li>
                      );
                    })
                  : country.borders.map((border, index) => {
                      let borderCountry = countries.find((country) => {
                        return country.cca3 === border;
                      });

                      return (
                        <li key={index}>
                          <Link to={`/${border}`}>
                            {borderCountry.name.common}
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
}
