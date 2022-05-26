import React from 'react';
import { Link, useParams } from 'react-router-dom';

function CountryDetails(props) {
  const { countries } = props;
  const { id } = useParams();

  const foundCountry = countries.find((country) => {
    return country.alpha3Code === id;
  });

  return (
    <div>
      <h2>Country Details</h2>

      {!foundCountry && <h2>No country found!</h2>}

      {foundCountry && (
        <>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`}
            alt="flag"
          />
          <h2>{foundCountry.name.common}</h2>
          <p>Capital: {foundCountry.capital}</p>
          <p>Area: {foundCountry.area}</p>
        </>
      )}

      <Link to="/">Back</Link>
    </div>
  );
}

export default CountryDetails;
