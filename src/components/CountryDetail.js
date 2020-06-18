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
    <div>
      {!id ? (
        <div className="col-7">
          <h1>{defaultCountry.name.common}</h1>
          <table className="table">
            <tbody>
              <tr>
                <td style={tdStyle}>Capital</td>
                <td>{defaultCountry.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {defaultCountry.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {defaultCountry.borders.map((border, index) => {
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
      ) : (
        <div className="col-7">
          <h1>{country.name.common}</h1>
          <table className="table">
            <tbody>
              <tr>
                <td style={tdStyle}>Capital</td>
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
                    {country.borders.map((border, index) => {
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
      )}
    </div>
  );
}
