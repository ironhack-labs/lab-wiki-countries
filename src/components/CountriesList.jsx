import { useState } from 'react';
import countries from './../countries.json';
import { NavLink } from 'react-router-dom';
import CountryDetail from './CountryDetail';

function CountriesList() {
  const [currentCountries, setCountries] = useState(countries);
  return (
    <div className="container">
      <div className="row">
        <div className="col-5 countries-list">
          <div className="list-group">
            {countries.map((country) => (
              <NavLink
                key={country.alpha3Code}
                className="list-group-item list-group-item-action"
                to={'/country/' + country.alpha3Code}
              >
                {country.name.common}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="col-7">
          <CountryDetail />
        </div>
      </div>
    </div>
  );
}

export default CountriesList;
