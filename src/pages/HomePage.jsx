import { useState } from "react";
import { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

import axios from "axios";

function HomePage() {
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then(function (response) {
        setCountries(response.data);
        console.log(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  if (!countries) return "loading";

  return (
    <>
      <h1>WikiCountries: Your Guide to the World</h1>
      {countries.map(function (country) {
        return (
          <div key={country.alpha3Code}>
            <Link to={`/${country.alpha3Code}`}>
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              ></img>
              {country.name.common}
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default HomePage;
