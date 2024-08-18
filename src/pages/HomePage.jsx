import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        console.log(response.data); // Log the response data to understand its structure
        setCountries(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the countries data:", error);
      });
  }, []);

  return (
    <>
      <div
        className="container"
        style={{ maxHeight: "90vh", overflow: "scroll" }}
      >
        <h1 style={{ fontSize: "24px" }}>
          WikiCountries: Your Guide to the World
        </h1>
        <div className="list-group">
          {countries.map((country) => (
            <Link
              key={country.alpha3Code}
              className="list-group-item list-group-item-action"
              to={`/${country.alpha3Code}`}
            >
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={`${country.name.common} flag`}
                style={{ marginRight: "10px" }}
              />
              {country.name.common}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
