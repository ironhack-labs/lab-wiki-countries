import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://ih-countries-api.herokuapp.com/countries"
        );
        setCountries(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching countries data:", error);
      }
    };
    fetchCountries();
  }, []);

  return (
    <div className="container">
      <h1>WikiCountries: Your Guide to the World</h1>
      <ul className="list-unstyled row">
        {countries.map((country) => (
          <ol key={country.alpha3Code}>
            <Link to={`/${country.alpha3Code}`}>
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={country.name.common}
              />
              {country.name.common}
            </Link>
          </ol>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
