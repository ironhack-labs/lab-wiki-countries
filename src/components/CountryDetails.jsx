import React from 'react';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';

function CountryDetails({ countries }) {
  let { alpha3Code } = useParams();
  const country = countries.find(c => c.alpha3Code === alpha3Code);

  if (!country) {
    return <div>Select a country to view details</div>;
  }

  return (
    <div className="card">
      <div className="card-header">
        <h5>{country.name.common}</h5>
      </div>
      <div className="card-body">
        <p>
          <strong>Capital:</strong> {country.capital}
        </p>
        <p>
          <strong>Area:</strong> {country.area} km²
        </p>
        <h6>Borders:</h6>
        <ul>
          {country.borders.map(borderCode => {
            const borderCountry = countries.find(c => c.alpha3Code === borderCode);
            return (
              <li key={borderCode}>
                <Link to={`/${borderCode}`}>
                  {borderCountry ? borderCountry.name.common : borderCode}
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