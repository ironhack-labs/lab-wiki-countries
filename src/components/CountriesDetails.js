import React from 'react';
import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';
import axios from 'axios';

function CountryDetails({ countries }) {
  const { alpha3Code } = useParams();

  const country = countries.find((c) => c.alpha3Code === alpha3Code);

  if (!country) {
    return <div>Loading...</div>;
  }
  return (
    <div className="col-7">
      <h1>{country.name.common}</h1>
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
        //src={`https://flagcdn.com/16x12/${country.alpha2Code.toLowerCase()}.png`}
        alt={`${country.name} flag`}
        style={{ width: '200px', height: '150px', marginBottom: '20px' }}
      />
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area} km<sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map((border) => (
                  <li key={border}>
                    <Link to={`/${border}`}>{border}</Link>
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;