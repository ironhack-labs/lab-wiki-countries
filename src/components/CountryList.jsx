import React from 'react';
import { Link } from 'react-router-dom';
const CountryList = (props) => {
  console.log('no the list compent gets rendered!');
  return (
    <div className="country-list-div">
      <ul className="country-list">
        {props.countries.map((country) => {
          return (
            <li key={country.cca2}>
              <Link to={`/country/${country.cca2}`}>{country.name.common}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CountryList;
