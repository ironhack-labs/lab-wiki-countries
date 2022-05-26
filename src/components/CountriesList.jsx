import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import countriesData from '../countries.json';

function CountriesList() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(countriesData);
  }, []);

  return (
    <div className='countriesList'>
      <h1>CountriesList</h1>
      {countries.map((country) => {
        return (
          <div key={country.alpha3Code} className="country">
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              alt=""
            />
            <h3>
              <Link to={`/countries/${country.alpha3Code}`}>
                {country.name.common}
              </Link>
            </h3>
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;
