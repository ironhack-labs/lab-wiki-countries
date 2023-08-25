import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const CountryDetailsPage = () => {
  const { alpha3Code } = useParams(); 
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    axios.get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
      .then(response => {
        setCountryData(response.data);
      })
      .catch(error => {
        console.error("Error fetching country data:", error);
      });
  }, [alpha3Code]); 

  if (!countryData) {
    return <div className="container mt-4">Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <h1>{countryData.name}</h1>
      <p>Capital: {countryData.capital}</p>
      <p>Area: {countryData.area} km²</p>
      <p>Borders:</p>
      <ul>
        {countryData.borders.map(border => (
          <li key={border}>
            <Link to={`/${border}`}>{border}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryDetailsPage;
