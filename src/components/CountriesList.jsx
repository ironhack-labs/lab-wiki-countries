import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList({ countries }) {
  return (
    <div className="row">
      <div className="" style={{ overflow: 'scroll', maxHeight: '90vh' }}>
        <div className="list-group">
          {countries.map((country) => (
            <Link
              to={`/countries/${country.alpha3Code}`}
              className="list-group-item list-group-item-action"
              key={country.name.common}
            >
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={country.alpha2Code}
              />
              <p>{country.name.common}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default CountriesList;
