import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../HomePage.css"

function HomePage() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        console.log(response.data);
        setCountries(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>WikiCountries: Your Guide to the World</h1>
      <ul className="listCountries">
        {countries.map((country) => {
          return (
            <section>
              <li>{country.name.common} </li>
              <Link to={`/${country.alpha3Code}`}>
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  alt="country flag"
                />
              </Link>
            </section>
          );
        })}
      </ul>
    </div>
  );
}

export default HomePage;
