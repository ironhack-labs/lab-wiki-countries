import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function CountryDetails() {
  const [oneCountry, setCountry] = useState(null);
  const { countryId } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
      .then((res) => {
        setCountry(res.data);
      })
      .catch((err) => console.log(err));
  }, [countryId]);

  return (
    <div>
      {oneCountry && (
        <>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${oneCountry.alpha2Code.toLowerCase()}.png`}
            alt={oneCountry.name.common}
          />
          <h2>{oneCountry.name.common}</h2>
          <p>Capital: {oneCountry.capital}</p>
          <p>Area: {oneCountry.area}</p>
          <ul>
          <p>Borders:</p>
          {oneCountry.borders.map((el) => {
            return  <p>{el}</p>;
          })}
          </ul>
        </>
      )}
    </div>
  );
}

export default CountryDetails;
