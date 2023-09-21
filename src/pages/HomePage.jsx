import axios from "axios";
import React, { useEffect, useState } from "react";

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
        {countries.map(({ name, countryCode }) => (
          <a
            className="list-group-item list-group-item-action"
            href={countryCode}
          >
            {name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
