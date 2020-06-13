import React from 'react';
import countriesJSON from '../countries.json';

import { NavLink } from 'react-router-dom';

function CountriesList() {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {countriesJSON.map((eachCountry) => {
          return (
            <div
              key={eachCountry.cca3}
              className="list-group-item list-group-item-action"
            >
                <span>{eachCountry.flag}   </span>
              <NavLink to={`/countries/${eachCountry.cca3}`}>
                {eachCountry.name.common}
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;
