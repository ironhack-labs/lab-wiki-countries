import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList(props) {
  return (
    <div className="all-countries">
      {props.countriesArr.map((countryObj) => {
        return (
          <Link to={`/country/${countryObj.alpha3Code}`}>
            <div className="listed-country">
              <img
                className="flag-img"
                src={countryObj.flag}
                alt={countryObj.name + 'flag'}
              />
              <p>{countryObj.name}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default CountriesList;
