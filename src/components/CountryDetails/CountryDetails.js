import React from 'react';
import { Link } from 'react-router-dom';

import './CountryDetails.css';

export default function CountryDetails(props) {
  const countryId = props.match.params.cca3;
  const {
    name,
    capital: capitals,
    area,
    borders,
  } = props.countries.find((country) => country.cca3 === countryId);
  const borderCountries = borders.map((cca3) =>
    props.countries.find((country) => country.cca3 === cca3)
  );

  return (
    <div className="country-details container">
      <h2>{name.common}</h2>
      <div className="row">
        <h3 className="col-4">Capital</h3>
        <h3 className="col-8">{capitals[0]}</h3>
      </div>
      <div className="row">
        <h3 className="col-4">Area</h3>
        <h3 className="col-8">{area} km^2</h3>
      </div>
      <div className="row">
        <h3 className="col-4">Borders</h3>
        <h3 className="col-8">
          <ul>
            {borderCountries.map((country) => {
              return (
                <Link key={country.cca3} to={`/countries/${country.cca3}`}>
                  <p>{country.name.common}</p>
                </Link>
              );
            })}
          </ul>
        </h3>
      </div>
    </div>
  );
}
