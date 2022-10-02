import React from 'react';
import { Link } from 'react-router-dom';
// import countries from '../countries.json';

function CountriesList({ countries }) {
  // console.log('countries: ', countries);
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div
        className="list-group"
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        {countries.map((country) => {
          return (
            <Link
              key={country.alpha3Code}
              to={`/${country.alpha3Code}`}
              country={country}
            >
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt="some dumb rag"
              ></img>
              <p>{country.name.common}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;
