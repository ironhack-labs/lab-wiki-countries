import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList({ countries }) {
  // let smallFlag = countries.alpha2Code.toLowerCase();
  return (
    <div className="list-group">
      {countries.map((country) => {
        return (
          <Link
            className="list-group-item list-group-item-action"
            to={`/${country.alpha3Code}`}
          >
            <h1>{country.name.common}</h1>
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              alt="flag"
            />
          </Link>
        );
      })}
      )
    </div>
  );
}

export default CountriesList;
