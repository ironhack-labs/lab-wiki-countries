import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import CountryDetails from './CountryDetails';

function CountriesList(props) {
  const { countries } = props;
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    setAllCountries(countries);
  }, []);

  return (
    <div>
      <h2>Countries List</h2>
      {allCountries.map((country) => {
        return (
          <div jey={country.alpha3Code}>
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${foundcountry.alpha2Code.toLowerCase()}.png`}
              alt="country-flag"
            />
            <h3>
              <Link to={`/${country.alpha3Code}`}>{country.name.common}</Link>
            </h3>
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;
