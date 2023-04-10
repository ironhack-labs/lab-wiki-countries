import React from 'react';
import { Link, useParams } from 'react-router-dom';

function CountryDetails({ countries }) {
  const params = useParams();
  const country = countries.filter(
    (country) => country.alpha3Code === params.code
  );

  return (
    <div class="col-7">
      <img
        src={`https://flagpedia.net/data/flags/w80/${country[0].alpha2Code.toLowerCase()}.png`}
        alt={country[0].name.common}
        className="mr-3"
      />
      <h1>{country[0].name.common}</h1>

      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{country[0].capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country[0].area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country[0].borders.map((border) => (
                  <li>
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
