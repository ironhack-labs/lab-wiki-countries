import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

const CountryDetails = (props) => {
  const countryId = props.match.params.id;
  const countryObj = countries.find((e) => e.cca2 === countryId);
  const borderCountries = countries.filter((e) =>
    countryObj.borders.includes(e.cca3)
  );
  const languageKey = Object.keys(countryObj.languages)[0];
  console.log(languageKey);
  console.log(borderCountries);
  return (
    <div className="country-details">
      <h3>{countryObj.name.common} </h3>
      <p>Capital: {countryObj.capital}</p>
      <p>Official Language: {countryObj.languages[languageKey]}</p>
      <p>
        Border Countries:
        {borderCountries.length === 0 && ' No Border Countries!'}
        {borderCountries.map((e) => {
          return <Link to={`/country/${e.cca2}`}>{e.name.official}</Link>;
        })}
      </p>
    </div>
  );
};

export default CountryDetails;
