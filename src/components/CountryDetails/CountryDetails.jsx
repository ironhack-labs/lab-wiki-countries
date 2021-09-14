import React from 'react';
import { Link } from 'react-router-dom';

export default function CountryDetails({ countries, match }) {
    
  const cca3 = match.params.country

  const country = countries.find((c) => c.alpha3Code === cca3);

  const borders = (border) => {
    const countryName = countries.find ((c) => {
      return c.alpha3Code === border
    })
    return countryName.name
  }
  // const country = countries.find(currentCountry => currentCountry.alpha3Code === alpha3Code);

  // const countriesBorders = country.borders
  // .map(countryBorder => countries.find(c => c.alpha3Code === countryBorder));
     
      return (
      <div className="CountryDetails">
        <div>
          <h1>{country.name}</h1>
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
              <li key={country.name}>
                <Link to={`/countries/${country.alpha3code}`}>
                  <h4>{country.name}</h4>
                </Link>
              </li> 
            ))}
          </ul>
        </div>
        <hr />
      </div>
    );
}
