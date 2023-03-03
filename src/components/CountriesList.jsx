import React from 'react';
import { Link, useParams } from 'react-router-dom';

function CountriesList({ countries }) {
  return (
    <div>
      {countries.map((country) => {
        return (
          <div>
            <div>
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt=""
              />
            </div>
            <div>
              <Link to={`/country/${country.alpha3Code}`}>
                {country.name.common}
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;
