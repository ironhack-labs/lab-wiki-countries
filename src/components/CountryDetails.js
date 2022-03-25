import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const CountryDetails = ({ countries }) => {
  const { countryId } = useParams();

  // const [countryFound, setCountry] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
  //     .then((country) => {
  //       const foundCountry = country.data;
  //       setCountry(foundCountry);
  //       // console.log(countryFound);
  //     });
  // }, []);

  // console.log(countryFound);

  const foundCountry = countries.find(
    (country) => country.alpha3Code === countryId
  );

  const countryAlpha2Code = foundCountry.alpha2Code.toLocaleLowerCase();

  const borders = foundCountry.borders;

  return (
    <div>
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${countryAlpha2Code}.png`}
        alt="flag"
      />
      <h2 style={{ marginTop: '20px' }}>{foundCountry.name.common}</h2>
      <hr />
      <p>Capital: {foundCountry.capital}</p>
      <hr />
      <p>Area: {foundCountry.area} km2</p>
      <hr />
      {borders.length === 0 ? (
        <p></p>
      ) : (
        <>
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
