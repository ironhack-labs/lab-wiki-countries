import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './CountryDetails.css';

export default function CountryDetails(props) {
  const [details, setDetails] = useState(undefined);
  const { alpha3Code } = useParams();

  useEffect(() => {
    alpha3Code &&
      axios
        .get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
        .then((result) => {
          setDetails(result.data);
        })
        .catch((err) => {
          console.log(err);
        });
  }, [alpha3Code]);
  return (
    <section className="Country">
      {details && (
        <div className="Country-details">
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${details.alpha2Code.toLowerCase()}.png`}
            alt="flag"
          />
          <h1>{details?.name?.common}</h1>
          <div className="Country-specs">
            <p>Capital: {details.capital}</p>
            <hr />
            <br />
            <p>Area: {details.area}</p>
            <hr />
            <br />

            <p>
              Borders:
              {details.borders.map((border) => {
                return <li>{border}</li>;
              })}
            </p>
            <hr />
            <br />
          </div>
        </div>
      )}
    </section>
  );
}