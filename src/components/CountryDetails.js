import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

export default function CountryDetails(props) {
  console.log('params', props.match.params.id);

  const countryDetail = countries.find(
    (country) => country.cca3 === props.match.params.id
  );

  console.log('country details', countryDetail);
  return (
    <div className="col-7">
      <h1>{countryDetail.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{countryDetail.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {countryDetail.area}
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {countryDetail.borders.map((countryBorders) => {
                  const bordersName = countries.find((country) => {
                    return countryBorders === country.cca3;
                    console.log('country borders', countryBorders);
                  });
                  return (
                    <li>
                      <Link to={`${countryBorders}`}>
                        {bordersName.name.common}
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
