import React from 'react';
import { NavLink } from 'react-router-dom';

export default function CountriesList(props) {
  return (
    <div>
      {props.Countries.map((e) => {
        return (
          <div className="col-5" key={e.alpha3Code}>
            <div className="list-group">
              <NavLink to={`/${e.alpha3Code}`}> {e.name.common} </NavLink>
            </div>
          </div>
        );
      })}
    </div>
  );
}
