import React from 'react';
import { useParams } from 'react-router-dom';

export const CountryDetails = ({ countries }) => {
  const { countryId } = useParams();

  const foundCountry = countries.find(
    (country) => country.alpha3Code === countryId
  );

  const countryAlpha2Code = foundCountry.alpha2Code.toLocaleLowerCase();

  const borders = foundCountry.borders;

  return (
    <div>
      {!foundCountry && <h3>Country not found!</h3>}

      {foundCountry && (
        <>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${countryAlpha2Code}.png`}
            alt="flag"
          />
          <h2>{foundCountry.name.common}</h2>
          <hr />
          <p>Capital: {foundCountry.capital}</p>
          <hr />
          <p>Area: {foundCountry.area} km2</p>
          <hr />
          <p>Borders:</p>
          <ul style={{ listStyleType: 'none' }}>
            {borders.map((border, index) => {
              return <li key={index}>{border}</li>;
            })}
          </ul>
        </>
      )}
    </div>
  );
};
