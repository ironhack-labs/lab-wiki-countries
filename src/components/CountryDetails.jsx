import React from 'react';
import { useParams, Link } from 'react-router-dom';

function CountryDetails({ countries }) {
  // Getting the country code from the URL using useParams
  const { alpha3Code } = useParams();

  // Find the country based on the alpha3Code from the URL
  const country = countries.find(c => c.alpha3Code === alpha3Code);

  // In case the country is not found, we simply return a message.
  if (!country) return <div>Country not found</div>;

  return (
    <div>
      <h1>{country.name.common}</h1>
      <img 
        src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} 
        alt={`${country.name.common} Flag`} 
      />
      <p><strong>Capital:</strong> {country.capital}</p>
      <p><strong>Area:</strong> {country.area} km²</p>
      <div>
        <strong>Borders:</strong>
        <ul>
          {country.borders.map(borderCode => {
            const borderCountry = countries.find(c => c.alpha3Code === borderCode);
            return (
              <li key={borderCode}>
                <Link to={`/${borderCode}`}>
                  {borderCountry.name.common}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default CountryDetails;