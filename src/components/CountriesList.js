import React from 'react';
import { Link } from 'react-router-dom';

const CountriesList = (props) => {
  function accessCountries() {
    return props.countries.map((country) => {
      return (
        <Link
          to={`/countries/${country.cca3}`}
          className="list-group-item list-group-item-action"
        >
          {country.flag} {country.name.common}
        </Link>
      );
    });
  }
  //   console.log(props);

  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">{accessCountries()}</div>
    </div>
  );
};

export default CountriesList;
