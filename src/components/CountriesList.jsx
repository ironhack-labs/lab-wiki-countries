import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import countries from '../countries.json';
const apiURL = ' https://ih-countries-api.herokuapp.com/countries';

function CountriesList(props) {
  const [countryList, setCountryList] = useState([]);
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(apiURL);
        const data = await response.json();
        setCountryList(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCountries();
  }, []);

  // console.log('COUNTRIES', countries);
  return (
    <div>
      {countryList.map((country) => {
        return (
          <Link key={country.alpha3Code} to={`/country/${country.alpha3Code}`}>
            <p>{country.name.official}</p>
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              alt={country.name.official}
            />
          </Link>
        );
      })}
    </div>
  );
}

export default CountriesList;
