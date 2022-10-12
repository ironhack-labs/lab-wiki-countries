import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  const { countries } = props;
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {countries.map((country) => {
          return (
            <Link
              key={country._id}
              className="list-group-item list-group-item-action"
              to={`/${country.alpha3Code}`}
            >
              <img
                width="30px"
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png/`}
                alt={country.name.common}
              />
              <p>
                {country.alpha3Code} {country.name.common}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CountriesList;
