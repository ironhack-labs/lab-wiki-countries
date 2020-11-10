import React from 'react';

import countries from '../../countries.json';

function CountryDetails(props) {
  // console.log(props.match.params.country)

  const c3code = props.match.params.country;

  const country = () => countries.find(country => country.cca3 === c3code);

  return (
    <div>
      <h1>{country().name.common}</h1>
      <table>
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{country().capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>{country().area} km</td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>{country().borders} km</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;