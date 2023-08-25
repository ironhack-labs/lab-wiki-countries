import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react"

function HomePage(props) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        setCountries(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <div>
      <h1>WikiCountries: Your Guide to the World</h1>
      {countries.map((country) => {
        return (
          <div key={country._id} className="country">
            <h3>{country.name.common}</h3>
            <Link to={`/${country.alpha3Code}`}>{country.name.common}</Link>
          </div>
        );
      })}
    </div>
  );
}

export default HomePage;
