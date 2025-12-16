import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import countriesData from "../data/countries.json";

function HomePage() {
  const [countries, setCountries] = useState([]);
  const baseUrl = "https://ih-countries-api.herokuapp.com";

  useEffect(() => {
    axios
      .get(`${baseUrl}/countries`)
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error("Error fetching countries data:", error);
      });
    // setCountries(countriesData);
  }, []);

  if (!countries.length) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container" style={{ maxHeight: "90vh" }}>
      <h2 style={{ fontSize: "24px" }}>
        WikiCountries: Your Guide to the World
      </h2>
      <div className="list-group">
        {countries.length &&
          countries.map((country) => (
            <Link
              key={country.aplha3Code}
              className="list-group-item list-group-item-action"
              to={`/${country.alpha3Code}`}
            >
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={country.name.common}
                style={{ width: "20px", marginRight: "10px" }}
              />
              {country.name.common}
            </Link>
          ))}
      </div>
    </div>
  );
}

export default HomePage;
