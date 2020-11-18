import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

function CountryDetails(props) {
  const country = countries.find(
    (item) => item.cca3 === props.match.params.cca3
  );
  console.log(country);
  return (
    <div>
      <h2>Country Name: {country.name.official}</h2>
      <h2>Area: {country.area}</h2>
      <h2>
        Borders:{' '}
        {country.borders.map((element, i) => {
          const border = countries.find((item) => item.cca3 === element);

          return (
            <li key={i}>
              <Link to={`/countries/${border.cca3}`}>{border.name.common}</Link>
            </li>
          );
        })}
      </h2>
    </div>
  );
}

export default CountryDetails;
