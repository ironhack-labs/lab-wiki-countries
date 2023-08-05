import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList({ countries }) {
  return (
    <div>
      {countries.map((country) => (
        <div key={country.alpha3Code}>
          <Link 
            className="country-link d-flex align-items-center" 
            to={`/${country.alpha3Code}`}
          >
            <img 
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} 
              alt={`${country.name.common} Flag`}
              className="mr-2" // margin-right for spacing between the image and the text
            />
            {country.name.common}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CountriesList;