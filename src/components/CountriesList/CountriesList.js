import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  const fullCountryList = props.countries.map((country, index) => {
    return (
      <Link
        key={index + 1}
        to={country.cca3}
        className="list-group-item list-group-item-action"
      >
        {country.flag} {country.name.common}
      </Link>
    );
  });

  return <div className="list-group">{fullCountryList}</div>;
};

export default CountriesList;
