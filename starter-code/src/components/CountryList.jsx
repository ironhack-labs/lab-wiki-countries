import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

const CountryList = () => {
  return (
    <div>
      <div className="row">
      </div>
      <div className="list-group">
        {countries.map((country) =><Link className="list-group-item list-group-item-action" key={country.cca3} to={"/" + country.cca3}>{country.name.official}</Link> )}
      </div>
    </div>
  )
}

export default CountryList