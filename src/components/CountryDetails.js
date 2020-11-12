import React from 'react';
import { Countries } from '../App.js';
import { Link } from 'react-router-dom';

const CountryDetails = (props) => {
  let getCountry = (cca3) => Countries.find((obj) => obj.cca3 === cca3);

  const { params } = props.match;

  const foundCountry = getCountry(params.cca3);

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
              {foundCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {foundCountry.borders.map((country, index) => (

                  <li><Link to={`/${country}`}>{getCountry(country).name.common}</Link></li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetails;
