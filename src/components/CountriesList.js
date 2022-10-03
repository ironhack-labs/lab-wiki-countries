import React from 'react';
import { Link } from 'react-router-dom';
// import countries from '../countries.json';

function CountriesList({ countries }) {
  // console.log('countries: ', countries);
  return (
    <div
      className="list-group list-group-flush border-bottom scrollarea"
      style={{
        display: 'flex',
        maxHeight: '92vh',
        overflow: 'scroll',
      }}
    >
      <div
        className="list-group-item list-group-item-action py-3 lh-sm"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {countries.map((country) => {
          return (
            <Link
              className='"border border-muted list-group-item list-group-item-action py-3 lh-sm"'
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
