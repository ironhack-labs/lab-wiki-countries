import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


function HomePage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h1>WikiCountries: Your Guide to the World</h1>
      <ul>
        {countries.map((country) => (
          <li key={country.alpha3Code} className="card p-2 m-2">
            <Link to={`https://ih-countries-api.herokuapp.com/countries/${country.alpha3Code}`}>
              <img src={`https://flagpedia.net/data/flags/icon/72x54/${ country.alpha2Code.toLowerCase() }.png`} alt={country.common} className="me-2"/>
              <span>{country.name.common}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;