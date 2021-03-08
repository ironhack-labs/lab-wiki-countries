import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList({ countries }) {
  return (
    <div className="col-5 mr-3" style={{ maxHeight: '90vh', overflowY: 'scroll' }}>
      {countries.map((country, i) => {
        return (
          <div key={i} className="list-group">
            <Link
              className="list-group-item list-group-item-action"
              to={`/${country.alpha3Code}`}>
              <img className="mr-3" src={`https://www.countryflags.io/${country.alpha2Code}/flat/64.png`} alt={country.name}/>
              <span>{country.alpha2Code} {country.name}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;
