import React from 'react';
import { Link } from 'react-router-dom';
import Countries from '../countries.json'

    export default function countryDetails (props) {
        const getCountry = (id) => {
          let found = Countries.find(oneCountry => {
            return oneCountry.cca3 === id;
          })
          return found;
        };
      
      const { params } = props.match;
      const foundCountry = getCountry(params.someId);

      let borderList = foundCountry.borders.map((borderCountryCode) => {
          const borderCountryName = getCountry(borderCountryCode).name.common;
          return (
            <li><Link to={`/details/${borderCountryCode}`}>{borderCountryName}</Link></li>
          )
      })
        
    return (
        <div class="col-7">
            <h1>{foundCountry.name.common}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{ width: '30em' }}>Capital</td>
                  <td>{foundCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{foundCountry.area} km <sup>2</sup></td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td><ul>{borderList}</ul></td>
                </tr>
              </tbody>
            </table>
        </div>
    )
}

