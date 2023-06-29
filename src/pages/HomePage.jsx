import { useState } from "react";
import { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

import axios from "axios";

import Navbar from "../components/Navbar";

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
      <Navbar />
      <div
        className="container"
        style={{ maxHeight: "90vh", overflow: "scroll" }}
      >
        {countries.map(function (country) {
          return (
            <div key={country.alpha3Code} className="list-group">
              <Link
                to={`/${country.alpha3Code}`}
                className="list-group-item list-group-item-action"
              >
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                ></img>
                {country.name.common}
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default HomePage;
