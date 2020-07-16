import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../../countries.json';

function CountryDetails(props) {
  const getCountry = countries.find(
    (elm) => props.match.params.id === elm.cca3
  );

  return (
    <div class="col-7">
      <h1>{getCountry.name.common}</h1>
      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td>Capital</td>
            {getCountry.capital.map((capital) => (
              <td>{getCountry.cca3.capital}</td>
            ))}
          </tr>
          <tr>
            <td>Area</td>
            <td>551695 km</td>
            <sup>2</sup>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                <li>
                  <Link to={countries.cca3}>Andorra</Link>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
