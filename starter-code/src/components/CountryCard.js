import React from 'react';
import { Link } from 'react-router-dom';

import countries from '../countries.json';

const CountryCard = props => {
  const { id } = props.match.params;
  const country = countries.filter(country => country.cca3 === id)[0];

  if (!country) return null;

  const {
    name: { common: name },
    capital: [capital],
    flag,
    area,
    borders
  } = country;

  const bordersCountries = countries.filter(country => borders.includes(country.cca3));

  const bordersList = bordersCountries.map(country => {
    const {
      name: { common: name },
      cca3: id
    } = country;

    return (
      <li key={id}>
        <Link to={`/country/${id}`}>{name}</Link>
      </li>
    );
  });

  return (
    <>
      <h1>
        {flag} {name}
      </h1>
      <table className="table">
        <tbody>
          <tr>
            <td>Capital</td>
            <td>{capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>{area} km2</td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>{bordersList}</ul>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default CountryCard;
