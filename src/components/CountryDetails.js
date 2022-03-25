import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const CountryDetails = () => {
  const { countryId } = useParams();

  const [countryFound, setCountry] = useState([]);

  useEffect(() => {
    // const getCountry = async () => {
    const countryFromApi = axios.get(
      `https://ih-countries-api.herokuapp.com/countries/${countryId}`
    );
    console.log(countryFromApi.data);
    setCountry(countryFromApi.data);

    // };
    // getCountry();
  }, [countryId]);

  // const foundCountry = countries.find(
  //   (country) => country.alpha3Code === countryId
  // );

  // const countryAlpha2Code = countryFound.alpha2Code.toLocaleLowerCase();

  const borders = countryFound.borders;

  // if (!countryFound) return <p>Loading...</p>;

  return (
    <div>
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${countryFound.alpha2Code.toLocaleLowerCase()}.png`}
        alt="flag"
      />
      <h2 style={{ marginTop: '20px' }}>{countryFound.name.common}</h2>
      <hr />
      <p>Capital: {countryFound.capital}</p>
      <hr />
      <p>Area: {countryFound.area} km2</p>
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
