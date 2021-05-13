import React from 'react';
import countriesJson from '../countries.json';
import { Link } from 'react-router-dom';

function getCountry(code) {
  return countriesJson.find((country) => country.cca3 === code);
}

function CountryDetails(props) {
  const theCountry = getCountry(props.match.params.countryId);

  return (
    <div className="col-7">
      <h1>{theCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{theCountry.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {theCountry.area} km<sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {theCountry.borders.map((country) => {
                  return (
                    <li key={country}>
                      <Link to={`/${country}`}>
                        {getCountry(country)?.name.common}
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

export default CountryDetails;
