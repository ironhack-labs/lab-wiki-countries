import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

function CountryDetail(props) {

  let countryMatch = countries.find(
    (country) => props.match.params.id === country.cca3
  );

  const getCountryNameUsingCode = (border) => {
    var country = countries.find((country) => border === country.cca3);
    return country.name.common;
  };

  return (
    <div>
      <h1>{countryMatch.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            {countryMatch.capital.map((cap) => (
              <td key={countryMatch.cca3}>{cap}</td>
            ))}
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {countryMatch.area} km <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {countryMatch.borders.map((borderCountryCode) => (
                  <li key={borderCountryCode}>
                    <Link to={`/countries/${borderCountryCode}`}> {getCountryNameUsingCode(borderCountryCode)}</Link>
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

export default CountryDetail;
