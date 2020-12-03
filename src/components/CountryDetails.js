import React from 'react';
import { Link } from 'react-router-dom';
import data from '../countries.json';
import Borders from './Borders';

export default function CountryDetails(props) {
//   console.log(data);
  const countryId = props.match.params.cca3;
  const country = data.find((country) => country.cca3 === countryId);
//   console.log('Country', country);

  return (
    <div className="col-7">
      <h1>{country.name.official}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{country.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {country.area}
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map((el) => {
                    const border = data.find(
                    (country) => country.cca3 === el
                  );
                  return (
                    <li key={border.cca3}>
                      <Link to={border.cca3}>{border.flag} {border.name.official}</Link>
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
