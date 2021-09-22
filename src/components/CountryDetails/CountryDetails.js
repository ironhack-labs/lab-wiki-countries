import React from 'react';
import countries from './../../countries.json';
import {Link} from 'react-router-dom'

export default function CountryDetails(props) {
 
    const { cca3 } = props.match.params;

    const foundCountry = countries.find(
      (country) => country.cca3 === cca3
    );

    return (
      <div className="col-7">
        <h1>{foundCountry.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{foundCountry.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {foundCountry.area} km <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {foundCountry.borders.map((country) => {
                    return (
                      <li>
                        <Link to={`/${country}`}>
                          {
                            countries.find((elm) => elm.cca3 === country).name
                              .common
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
}
