import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';


export default function CountryDetail(props) {

  let findCountry = countries.find(
    (country) => props.match.params.id === country.cca3
  );

  let getCode = (borders) => {
    var country = countries.find((country) => borders === country.cca3);
    return country.name.common
  };

  return (
    <div>
      <h1>{findCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td>Capital</td>
            {findCountry.capital.map((capital) => (
              <td key={findCountry.cca3}>{capital}</td>
            ))}
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {findCountry.area} km <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {findCountry.borders.map((borderCountryCode) => (
                  <li key={borderCountryCode}>
                    <Link to={`/countries/${borderCountryCode}`}> {getCode(borderCountryCode)}</Link>
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

