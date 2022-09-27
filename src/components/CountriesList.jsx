import React from 'react';
import { Link } from 'react-router-dom';

export default function CountriesList({ countries }) {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {countries.map((country) => {
          return (
            <Link
              key={country.alpha3Code}
              className="list-group-item list-group-item-action"
              to={`/${country.alpha3Code}`}
            >
              <img
                style={{ height: '1em' }}
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              />
              {` ${country.name.official}`}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
