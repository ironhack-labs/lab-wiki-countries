import React from 'react';
import { Link } from 'react-router-dom';

const CountryDetail = (props) => {
const { CountriesData } = props;
const { cca3 } = props.match.params;
const countryByCCA3 = CountriesData.filter((country) => country.cca3 === cca3);
  
  return (
      <div className="col-7">
              <h1>{countryByCCA3[0].name.official}</h1>
              <table className="table">
                <thead></thead>
                <tbody>
                  <tr>
                    <td>Capital</td>
                    <td>{countryByCCA3[0].capital}</td>
                  </tr>
                  <tr>
                    <td>Area</td>
                    <td>{countryByCCA3[0].area} km
                      <sup>2</sup>
                    </td>
                  </tr>
                  <tr>
                    <td>Borders</td>
                    <td>
                      <ul>
                        {countryByCCA3[0].borders.map((border) => {
                          const nameByCCA3 = CountriesData.filter((country) => country.cca3 === border);
                          return (
                            <li key={border}>
                              <Link to={`/${border}`}>{nameByCCA3[0].name.official}</Link>
                            </li>
                          )
                        })}
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
    )
  }
export default CountryDetail;