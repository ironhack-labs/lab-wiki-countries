import React from 'react';
import { NavLink } from 'react-router-dom';
import countries from '../countries.json';

function CountriesList() {
  return (
    <div>
      <div>
        <div class="container">
          <div class="col-9" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
            {countries.map((eachCountry) => {
              return (
                <div>
                  <div class="list-group" key={eachCountry.cca3}>
                    <NavLink
                      class="list-group-item list-group-item-action"
                      to={`/countries/${eachCountry.cca3}`}
                    >
                      {eachCountry.name.official}
                    </NavLink>
                  </div>
                </div>
              );
            })}
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountriesList;
