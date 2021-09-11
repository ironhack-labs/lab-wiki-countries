import React from 'react';
import { Link } from 'react-router-dom';

export default function CountryDetails({ match, countries }) {
    
  const country = countries.find((currentCountry) => currentCountry.cca3 === match.params.cca3);
  const borders = countries.filter((currentCountry) => currentCountry.borders.includes(country.cca3));
  
    console.log(country.borders)
    return (
      <div className="CountryDetails">
        <div>
          <h1>{country.name.common}</h1>
          <hr />
        </div>
        <div>
          <p>
            <strong>Capital</strong>
          </p>
          <p>{country.capital}</p>
          <hr />
        </div>
        <div>
          <p>
            <strong>Area</strong>
          </p>
          <p>
            {country.area}km<sup>2</sup>
          </p>
          <hr />
        </div>
        <div>
          <p>
            <strong>Borders</strong>
          </p>
          <ul>
            {borders.map((country) => (
              <li key={country.name.common}>
                <Link to={`/countries/${country.cca3}`}>
                  <h4>{country.name.common}</h4>
                </Link>
              </li> 
            ))}
          </ul>
        </div>
        <hr />
      </div>
    );
  
}
