import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList(props) {
  const { countries } = props;

  return (
    <div className="col-md-4">
      <div className="list-group">
        {countries.map((country) => (
          <Link
            key={country.alpha3Code}
            to={`/country-details/${country.alpha3Code}`}
            className="list-group-item list-group-item-action"
          >
            {country.name.common}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CountriesList;
