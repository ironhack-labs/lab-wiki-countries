import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

export default function CountryDetails(props) {
  const country = countries.find(
    (c) => c.cca3 === props.match.params.cca3
  )
  return (
    <div>
      <h1>
        {' '}
        <b>Country:</b> {country.name.official}
      </h1>
      <h4>
        <span>
          {' '}
          <b>Borders:</b>{' '}
        </span>
        {country.borders.map((ele, i) => {
          let border = countries.find((countrie) => ele === countrie.cca3);
          return (
            <ul>
              <li key={i}>
                <Link to={`/countries/${border.cca3}`}>
                  {border.name.common}
                </Link>
              </li>
            </ul>
          )
        })}
      </h4>
    </div>
  );
}
