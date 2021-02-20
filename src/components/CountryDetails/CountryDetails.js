import React from 'react';
import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';

export default function CountryDetails({ countries }) {
  let { ID } = useParams();
  let [country] = countries.filter((country) => country.ccn3 === ID);
  let borders = countries.filter((pais) => country.borders.includes(pais.cca3));

  return (
    <div className="country-detail">
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area} m2</p>
      <div style ={{display: "flex", flexDirection:"column"}}>{borders.map((country) => {
        return (
          <Link to={`/${country.ccn3}`} key={country.cca3}>
            <span role="img">{country.flag}</span>
            {country.name.common}
          </Link>
        );
      })}</div>
      
    </div>
  );
}
