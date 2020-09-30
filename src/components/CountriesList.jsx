import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/CountriesList.css';
import countries from '../countries.json';

const CountriesList = (props) => {
  return (
    <section className="CountriesList">
      {countries.map((country) => {
        return (
          <Link className="text-dark" to="/details/{country.name.common}">
            <article className="card p-2 my-2 flex-row">
              <span className="pr-3">{country.flag}</span>
              {country.name.common}
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default CountriesList;
