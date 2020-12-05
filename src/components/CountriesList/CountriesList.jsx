import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {props.countries.map((country) => (
          <Link
            onClick={() => props.changeCountry(country.cca3)}
            to={('/', country.cca3)}
            key={country.cca3}
          >
            {country.flag} {country.name.common}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CountriesList;
