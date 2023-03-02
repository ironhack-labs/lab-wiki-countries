import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

function CountriesList(props) {
  const [countryList, setCountryList] = useState(countries);

  console.log('COUNTRIES', countries);
  return (
    <div>
      {countries.map((country) => {
        return (
          <Link key={country.alpha3Code} to={`/country/${country.alpha3Code}`}>
            <p>{country.name.official}</p>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.name.official}/>
          </Link>
        );
      })}
    </div>
  );
}

export default CountriesList;
