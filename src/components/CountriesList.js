import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList(props) {
  return (
    <div className="col-5">
      <div className="list-group">
        {props.countries.map((country) => (
          <Link
            className="list-group-item list-group-item-action"
            key={country.alpha3Code}
            to={`/${country.alpha3Code}`}
          >
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              alt={country.name.common}
            />
            <span className="countryCode">{country.name.common}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CountriesList;
