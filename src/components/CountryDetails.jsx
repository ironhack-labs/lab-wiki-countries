import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';

function CountryDetails(props) {
  const { countries } = props;
  const { countriesId } = useParams();

  const foundCountry = countries.find((country) => {
    console.log(countriesId);
    return country.alpha3Code === countriesId;
  });

  return (
    <div>
      <div>
        <h1>Country Details</h1>
        {!foundCountry && <h2>No Country found!</h2>}

        {foundCountry && (
          <>
            <h2>{foundCountry.name.common}</h2>
            <p>
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2code.toLowerCase()}.png`}
                alt="flag"
              />
            </p>
            <h3>Capital: {foundCountry.capital}</h3>
            <p>{foundCountry.area}</p>
          </>
        )}

        <Link to="/">Back</Link>
      </div>
    </div>
  );
}

export default CountryDetails;
