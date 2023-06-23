import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList({ countries }) {
  const rankedCountries = countries.sort((first, last) => {
    if (first.name.common < last.name.common) {
      return -1;
    }
    if (first.name.common > last.name.common) {
      return 1;
    }
    return 0;
  });

  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {rankedCountries.map((country) => (
          <Link
            key={country.alpha3Code}
            className="list-group-item list-group-item-action d-flex justify-content-center align-items-center flex-column"
            to={`/${country.alpha3Code}`}
          >
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              alt={country.name.common + ' flag'}
            />
            <div>{country.name.common}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CountriesList;