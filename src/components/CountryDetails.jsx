import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';
import '../stylesheets/CountryDetails.css';

const CountryDetails = (props) => {
  const country = countries.filter((c) => c.cca3 === props.match.params.id)[0];
  const borders = country.borders
    .map((borderId) => countries.filter((c) => c.cca3 === borderId))
    .flat();
  console.log(borders);

  return (
    <section className="CountryDetails">
      <h2>{country.name.common}</h2>

      <article className="CountryDetails__info">
        <h3>Capital </h3>
        <p>{country.capital}</p>
      </article>

      <article className="CountryDetails__info">
        <h3>Area</h3>
        <p>
          {country.area} km<sup>2</sup>
        </p>
      </article>

      <article className="CountryDetails__info">
        <h3>Borders</h3>
        <ul>
          {borders.map((b) => (
            <li key={b.cca3}>
              <Link to={'/details/' + b.cca3}>{b.name.common}</Link>{' '}
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default CountryDetails;
