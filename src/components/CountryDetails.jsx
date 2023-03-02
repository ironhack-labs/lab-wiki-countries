import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function CountryDetails({ countries }) {
  const [borders, setBorders] = useState([]);
  const [loading, setLoading] = useState(true);
  const bordersCountries = [];
  const { id } = useParams();

  const foundCountry = countries.find((country) => {
    return country.alpha3Code === id
  });

 /*  foundCountry.map((borders) => {
    return bordersCountries.push(borders.borders)
  }) */
  return (
    <div>
      {foundCountry && (
        <>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`}
            alt=""
          />
          <h2>{foundCountry.name.common}</h2>
          <div>
            <h6>Capital: {foundCountry.capital}</h6>
          </div>
          <div>
            <h6>Area: {foundCountry.area}</h6>
          </div>
          <div>
            <div>
              <h6>Borders</h6>
            </div>
            <div>
              <ul>
                {foundCountry.borders.length ? foundCountry.borders.map((borders) => {
                  return(
                  <>
                    <li>{borders}</li>
                  </>)
                }) : 'No Borders'
                }
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CountryDetails;
