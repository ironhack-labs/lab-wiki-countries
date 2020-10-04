import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  const renderCountriesList = props.countries.map((country) => (
    <Link className="list-group-item list-group-item-action" to={`/${country.cca3}`}>
      <img
        src={`https://www.countryflags.io/${country.cca2}/flat/64.png`}
        alt={country.cca2}
        style={{height:"40px"}}
      />
      &nbsp;&nbsp;
      {country.name.common}
    </Link>
  ));

  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        <div>{renderCountriesList}</div>
      </div>
    </div>
  );
};

export default CountriesList;
