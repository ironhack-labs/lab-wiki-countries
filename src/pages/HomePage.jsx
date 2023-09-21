import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://ih-countries-api.herokuapp.com/countries",
    }).then(function (response) {
      const parsedData = response.data.map((country) => {
        return {
          name: country.name.common,
          countryCode: country.alpha3Code,
          flagCode: country.alpha2Code.toLowerCase(),
        };
      });

      setCountries(parsedData);
    });
  }, []);

  return (
    <div
      className="container"
      style={{ maxHeight: "90vh", overflow: "scroll" }}
    >
      <h1 style={{ fontSize: "24px" }}>
        WikiCountries: Your Guide to the World
      </h1>

      <div className="list-group">
        {countries.map(({ name, countryCode, flagCode }) => (
          <Link
            to={countryCode}
            className="list-group-item list-group-item-action"
          >
            <img
              src={`https://flagpedia.net/data/flags/icon/20x15/${flagCode}.png`}
            />
            <span style={{ marginLeft: "10px" }}>{name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
