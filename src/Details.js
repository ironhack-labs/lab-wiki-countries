import React from 'react';
import countries from './countries.json';
import { Link } from 'react-router-dom';

export default function Details(props) {
  const countryId = props.match.params.countryName;

  const filtered = countries.find((country) => country.cca2 === countryId);

  return (
    <div>
      <h2>
        {filtered.name.official} {filtered.flag}
      </h2>
      <h3>Capital: {filtered.capital}</h3>
      <h3>Area: {filtered.area} km²</h3>
      <h3>
        Borders:
        {filtered.borders.map((i) => {
          return (
            <div>
              <h4>{i}</h4>
            </div>
          );
        })}
      </h3>
    </div>
  );
}
