import React from 'react';
import { Link } from 'react-router-dom';

export default function CountryDetail(props) {
  const countriesList = props.countriesList;
  let countryCode = props.match.params.countryCode;

  let foundCountry = countriesList.find(
    (country) => country.cca3 === countryCode
  );
  let bordersCountries = foundCountry.borders.map((eachCountry) => {
    return countriesList.find((country) => country.cca3 === eachCountry);
  });

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
                {bordersCountries.map((country, index) => {
                  return (
                    <Link
                      key={index}  
                      to={`/${country.cca3}`}
                      className="list-group-item list-group-item-action"
                    >
                      {country.name.common}
                    </Link>
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
