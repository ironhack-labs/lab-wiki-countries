import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

export default function CountryDetails(props) {
  const clickedCountryId = props.match.params.id;
  const country = countries.find(
    (country) => country.cca3 === clickedCountryId
  );

  return (
    <div className="col-7">
      <h1>{country.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td style={{ width: '30%' }}>Area</td>
            <td>
              {country.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td style={{ width: '30%' }}>Region</td>
            <td>{country.region}</td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map((borderCountry) => {
                  const countryName = countries.find(
                    (country) => country.cca3 === borderCountry
                  );
                  return (
                    <li key={borderCountry}>
                      <Link to={`/${borderCountry}`}>
                        {countryName.name.official}
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