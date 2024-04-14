import React, { useEffect, useState } from "react";
import countriesData from "../data/countries.json";
import { Link } from "react-router-dom";
import "./HomePage.css"

const HomePage = () => {
  const [countries, setCountries] = useState(countriesData);

  return (
    <div className="container">
      <h1>WikiCountries: Your Guide to the World</h1>
      <div className="list-group">
        {countries.map((country) => (
          <Link to={`/${country.alpha3Code}`} key={country._id} className="list-item">
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              alt={`flag-of-${country.name.common}`}
            />
            <p>{country.name.common}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
