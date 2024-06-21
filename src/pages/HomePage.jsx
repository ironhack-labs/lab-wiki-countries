import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

function HomePage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the countries data:", error);
      });
  }, []);

  return (
    <div>
      <h1 className="my-4">WikiCountries: Your Guide to the World</h1>
      <ul className="list-group">
        {countries.map((country) => (
          <li key={country.alpha3Code} className="list-group-item list-group-item-action">
            <Link to={`/${country.alpha3Code}`} className="d-flex align-items-center text-reset text-decoration-none">
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={`${country.name.common}`}
                className="me-2"
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
