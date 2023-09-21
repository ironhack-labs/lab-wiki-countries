import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const apiURL = "https://ih-countries-api.herokuapp.com/countries";

function HomePage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      setCountries(response.data);
    });
  }, []);

    console.log(countries);

  return (
    <div
      className="container"
      style={{ maxHeight: "90vh", overflow: "scroll" }}
    >
      <h1 style={{ fontSize: "24px" }}>
        WikiCountries: Your Guide to the World
      </h1>
      <div className="list-group">
        {countries.map((country) => (
          <div key={country._id}>
            <Link
              className="list-group-item list-group-item-action"
              to={`/${country.alpha3Code}`}
            >
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={country.name.common}
              />
              <p>{country.name.common}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
