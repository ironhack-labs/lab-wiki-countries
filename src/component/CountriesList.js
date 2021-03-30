// import React from 'react';
import { NavLink } from 'react-router-dom';

const CountriesList = (props) => {
  return (
    <div
      className="list-group"
      style={{ width: '40%', height: '93vh', overflow: 'auto' }}
    >
      {props.countries.map((eachCountry) => {
        return (
          <NavLink
            to={`/countries/${eachCountry.cca3}`}
            className="list-group-item"
          >
            <img
              src={`http://www.countryflags.io/${eachCountry.cca2}`}
              alt={`${eachCountry.name.common} flag`}
              style={{ height: '1.5rem' }}
            />
            {eachCountry.name.common}
          </NavLink>
        );
      })}
    </div>
  );
};
export default CountriesList;
