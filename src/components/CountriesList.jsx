import React from 'react';
import { Link } from 'react-router-dom';

export const CountriesList = ({ countries }) => {
  return (
    <div className="col-5 listItems">
      <div className="list-group">
        {countries.map((country) => {
          return (
            <Link
              key={country.alpha3Code}
              to={'/' + country.alpha3Code}
              className="list-group-item list-group-item-action"
            >
              <img
                src={'https://flagpedia.net/data/flags/icon/72x54/'+country.alpha2Code.toLowerCase()+'.png'}
                alt={country.name.official}
                width={30}
              />{' '}
              {country.name.official}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
