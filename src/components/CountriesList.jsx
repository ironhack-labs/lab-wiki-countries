import React from 'react';
import { Link } from 'react-router-dom';

import './CountriesList.css';

const CountriesList = ({ countries }) => {
  console.log('countries', countries);
  return (
    <>
      {/* <!-- Countries List (Bootstrap column) --> */}
      <div id="countries-list" className="col-5">
        <div className="list-group">
          {countries.map((country) => (
            <Link
              key={country.alpha3Code}
              className="list-group-item list-group-item-action"
              to={`/${country.alpha3Code}`}
            >
              <div>
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  alt=""
                />
              </div>

              {country.name.common}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default CountriesList;
