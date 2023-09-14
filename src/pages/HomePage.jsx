import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage(props) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const apiUrl = "https://ih-countries-api.herokuapp.com/countries";
    axios
      .get(apiUrl)
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  return (
    <div>
      <h1>WikiCountries: Your Guide to the World</h1>
      <ul>
        {countries.map((country) => (
          <li key={country.alpha3Code}>
            <Link to={`/country/${country.alpha3Code}`}>
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={country.name.common}
              />
              {country.name.common}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
