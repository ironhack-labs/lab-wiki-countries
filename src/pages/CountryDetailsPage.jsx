/* eslint-disable no-unused-vars */
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

function CountryDetails() {
  const [countryData, setCountryData] = useState(null);
  const { alpha3Code } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
      .then((response) => {
        setCountryData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
      });
  }, [alpha3Code]);

  if (!countryData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Country Details</h1>
      <h3>{countryData.name.common}</h3>
      <p>Capital: {countryData.capital}</p>
      <p>Area: {countryData.area} km</p>
      <p>Borders:</p>
      <ul>
        {countryData.borders.map((borders) => (
          <li key={borders}>
            <Link to={`/${borders}`}>{borders}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountryDetails;
