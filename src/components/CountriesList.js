import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList(props) {
  return (
    <div className="all-countries">
      {props.countriesArr.map((countryObj) => {
        return (
          <Link to={`/country/${countryObj.cca3}`}>
            {countryObj.name.official}
          </Link>
        );
      })}
    </div>
  );
}

export default CountriesList;
