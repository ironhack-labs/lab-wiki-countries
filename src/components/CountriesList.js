import CountryDetails from './CountryDetails';
import { useState, useEffect } from 'react';
import countryData from '../countries.json';

import { Link } from 'react-router-dom';

function CountriesList(props) {
  const [countries, setCountries] = useState(countryData);

//   useEffect(() => {
//     setCountries(props.countries);
//   }, [props.countries]);

  return (
    <div className="countriesList">
      <h2> List of Countries</h2>
      {countries.map((country) => {
        return (
          <div key={country.alpha3Code}>
            <h3>
            <Link to={`/${country.alpha3Code}`}>
            {country.name.common}
            </Link> 
            </h3>
            <p>
              {/* <CountryDetails /> */}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;
