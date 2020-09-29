import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

export default function CountryDetails(props) {

  const countryDetail = countries.find(
    (country) => country.cca3 === props.match.params.ecc3
  );


  return (
    <div className="col-5">
      <h1>{countryDetail.name.common}</h1>
      <table className="table">
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{countryDetail.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {countryDetail.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {countryDetail.borders.length !== 0?countryDetail.borders.map((countryBorders) => {
                  const bordersName = countries.find((country) => {
                    return countryBorders === country.cca3;
                  });
                  return (
                    <li>
                      <Link to={`${countryBorders}`}>
                        {bordersName.name.common}
                      </Link>
                    </li>
                  );
                }):<li>With no country</li>}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}