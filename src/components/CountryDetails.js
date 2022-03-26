import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const CountryDetails = () => {
  const { countryId } = useParams();

  const [countryFound, setCountry] = useState({});

  useEffect(() => {
    const getCountry = async () => {
      const countryFromApi = await axios.get(
        `https://ih-countries-api.herokuapp.com/countries/${countryId}`
      );
      setCountry(countryFromApi.data);
    };
    getCountry();
  }, [countryId]);

  return (
    <div>
      {countryFound.name && (
        <>
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
          {countryFound.borders.length === 0 ? (
            <p></p>
          ) : (
            <>
              <p>Borders:</p>
              <ul style={{ listStyleType: 'none' }}>
                {countryFound.borders.map((border, index) => {
                  return <li key={index}>{border}</li>;
                })}
              </ul>
            </>
          )}
        </>
      )}
    </div>
  );
};
