import React from 'react';
import { Link } from 'react-router-dom';

function CountryDetails(props) {
  return (
    <div key={props.cca3} className="country-details">
      <h1>{props.name}</h1>
      <table>
        <tbody>
          <tr className="table-row">
            <td>Capital</td>
            <td>{props.capital}</td>
          </tr>
          <tr className="table-row">
            <td>Area</td>
            <td>{props.area + 'km2'}</td>
          </tr>
          <tr className="table-row">
            <td>Borders</td>
            {props.borders.map((border) => {
              return (
                <td className="borders-list">
                  <Link to={`/country/${border}`}>{border}</Link>
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
