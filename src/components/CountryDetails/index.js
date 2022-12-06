import React from 'react';
import { Link, useParams } from 'react-router-dom';

const CountryDetails = ({countries}) => {
  const { alpha3Code } = useParams();

  const details = countries.find(country => {
    return country.alpha3Code === alpha3Code;
  })

  const { name, capital, area, borders } = details;

  return (
    <div className="col-7">
      <h1>{name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                { borders.map(border => {
                  return (
                    <li key={border}>
                      <Link to={`/${border}`}>{border}</Link>
                    </li>
                  )
                })
                }
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;