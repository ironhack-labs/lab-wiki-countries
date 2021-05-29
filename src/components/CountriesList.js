import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  const countryList = props.countries.map((country, index) => {
    return (
      <div>
        <Link
            key={index + 1}
            to={country.cca3}
            className="list-group-item list-group-item-action"
        >
            {country.flag} {country.name.common}
        </Link>
        </div>
    );
  });

  return <div className="list-group">{countryList}</div>;
};

export default CountriesList;