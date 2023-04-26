import { Link } from 'react-router-dom';
import React from 'react';

const CountriesList = ({ countries }) => {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-5"
          style={{ maxHeight: '90vh', overflow: 'scroll' }}
        >
          {countries.map((country) => (
            <div key={country.alpha3Code} className="list-group">
              <Link
                className="list-group-item list-group-item-action"
                to={`/${country.alpha3Code}`}
              >
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  alt={country.name.common}
                  width={'25px'}
                />
                <br />
                {country.name.common}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountriesList;
