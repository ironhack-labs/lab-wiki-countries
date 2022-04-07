import React from 'react';
import { Link, useParams } from 'react-router-dom';

//
const CountryDetails = ({ countries }) => {
  let alphaCode = useParams();
  const countryFound = countries.find(
    (country) => country.alpha3Code === alphaCode.alpha3Code
  );

  return (
    <div>
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${countryFound.alpha2Code.toLowerCase()}.png`}
        alt={countryFound.name.common}
      />
      <p> {countryFound.name.common} </p>

      <Link to="/countries-list"> Home</Link>
    </div>
  );
};

export default CountryDetails;
