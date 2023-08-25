import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const HomePage = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error("Error fetching countries data:", error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h1>WikiCountries: Your Guide to the World</h1>
      <ul>
        {countries.map((country) => (
          <li key={country.alpha3Code}>
            <Link to={`/${country.alpha3Code}`}>
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={`${country.name} flag`}
              />{" "}
              {country.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
