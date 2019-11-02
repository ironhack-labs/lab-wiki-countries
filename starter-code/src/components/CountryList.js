import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

const CountryList = props => {
  return (
    <div className="col-5 country-table">
      <div className="list-group">
        {countries.map(f => <Link to={f.cca3} key={f.cca3} className="list-group-item list-group-item-action">{f.flag}{f.name.common}</Link>)}
      </div>
    </div>
  )
}


export default CountryList;
