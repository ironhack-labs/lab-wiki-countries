import React from 'react';
//import countries from '../countries.json';
import { Link } from 'react-router-dom';
function CountriesList({ pays }) {
  const colStyle = { maxHeight: '90vh', overflow: 'scroll' };
  return (
    <div className="col-5" style={colStyle}>
      <div className="list-group">
        {pays.map((country) => {
          console.log(country);
          return (
            <Link
              key={country.alpha3Code}
              className="list-group-item list-group-item-action"
              to={`/${country.alpha3Code}`}
            >
              {country.alpha2Code} {country.name.official}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CountriesList;
