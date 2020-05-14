import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

const CountryDetail = (props) => {
  console.log(props);

  const CountryId = props.match.params.cca3;
  const getCountry = countries.find((obj) => obj.cca3 === CountryId);
  let borders = getCountry.borders;

  let borderCountry = borders.map((country) => {
    return countries.find((bc) => bc.cca3 === country);
  });
  console.log(borderCountry);
  return (
    <div className="col-6">
      <h1>
        {getCountry.flag}
        {getCountry.name.official}
      </h1>
      <hr />
      <h2>Capital: {getCountry.capital}</h2>
      <hr />
      <h2>
        Area: {getCountry.area} Km<sup>2</sup>
      </h2>
      <hr />
      <h3>Borders:</h3>
      <ul>
        {borderCountry.map((country) => {
          console.log(country);
          return (
            <li>
              <Link key={country} to={`/country/${country.cca3}`}>
                {country.name.official}
                {country.flag}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CountryDetail;
