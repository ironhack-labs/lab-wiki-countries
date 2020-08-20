import React from 'react';
import { Link } from 'react-router-dom';

export default function CountryDetails(props) {
  return (
    <div>
      <h1>{props.country.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{props.country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {props.country.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {props.country.borders.map((border, i) => {
                  let borderCountry = props.countries.find(
                    (country) => country.cca3 === border
                  );
                  if (borderCountry !== undefined) {
                    return (
                      <li key={i}>
                        <Link to={`/countries/${border}`}>
                          <p>{borderCountry.name.common}</p>
                        </Link>
                      </li>
                    );
                  } else {
                    return;
                  }
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
