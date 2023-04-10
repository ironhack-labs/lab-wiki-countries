import React from 'react';
import { Link } from 'react-router-dom';


function CountriesList({ countries }) {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {countries.map((country) => (
          <Link
            className="list-group-item list-group-item-action nav-link"
            to={`/${country.alpha3Code}`}
          >
            <img
              src={`https://flagpedia.net/data/flags/w80/${country.alpha2Code.toLowerCase()}.png`}
              alt={country.name.common}
              className="mr-3"
            />
            <div>
              {country.name.common}
            </div>
            
          </Link>
        ))}
        
      </div>
    </div>
  );
}

export default CountriesList;