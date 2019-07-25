import React from 'react';
import { NavLink } from 'react-router-dom';

const CountryList = (props) => {
  const { countries } = props;
  return (
    <div className="col-5 country-list">
      <div className="list-group">
        {
          countries.map((country, index) => {
            return <NavLink to={`/${country.cca3}`} activeClassName="active" className="list-group-item list-group-item-action" key={index}>{country.flag}{country.name.common}</NavLink>
          })
        }
      </div>
    </div>
  )
}

export default CountryList;