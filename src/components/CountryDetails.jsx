import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';
import './CountryDetails.css';

const CountryDetails = (props) => {
    const country = countries.find(country => country.cca3 === props.match.params.id)
    return (
        <div class="col-7">
            <h1>{country.name.common}</h1>
            <table class="table">
                <thead></thead>
                <tbody>
                    <tr>
                        <td>Capital</td>
                        <td>{country.capital[0]}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>{country.area} km
                  <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul>
                                {country.borders.map(border => {
                                    const borderLink = countries.find(country => country.cca3 === border)
                                    return (
                                        <li key={border}>
                                            <Link to={`/country/${borderLink.cca3}`}>
                                                {borderLink.name.common}
                                            </Link>
                                        </li>)
                                })}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

/* <div class="col-7">
          <h1>{country.name.common}</h1>
          <table class="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style="width: 30%;">Capital</td>
                <td>{country.capital[0]}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>{country.name.common} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {country.borders.map(border => {
                                const borderLink =  countries.find(country => country.cca3 === border)
                                return (
                                    <li key={border}>
                                        <Link to={`/country/${borderLink.cca3}`}>
                                            {borderLink.name.common}
                                        </Link>
                                    </li>)
                            })}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div> */

export default CountryDetails;