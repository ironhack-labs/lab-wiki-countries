import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = "https://ih-countries-api.herokuapp.com";

function HomePage() {
  const [countries, setCountries] = useState();

  const getCountries = () => {
    axios
      .get(`${API_URL}/countries`)
      .then((response) => setCountries(response.data))
      .catch((err) => console.log("Error fetching countries:", err));
  };

  useEffect(() => getCountries(), []);

  return (
    <>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">
            WikiCountries
          </a>
        </div>
      </nav>
      <div
        className="container"
        style={{
          maxHeight: "90vh",
          overflow: "scroll",
        }}
      >
        <h1>WikiCountries: Your Guide to the World</h1>
        <div className="list-group">
          {countries &&
            countries.map((country, i) => {
              const countryCode = country.alpha2Code.toLowerCase();
              const countryId = country.alpha3Code;

              return (
                <Link
                  key={i}
                  className="list-group-item list-group-item-action"
                  to={`/${countryId}`}
                >
                  <img
                    src={`https://flagpedia.net/data/flags/icon/72x54/${countryCode}.png`}
                    alt={`Flag of ${country.name.common}`}
                  />{" "}
                  <p>{country.name.common}</p>
                </Link>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default HomePage;
