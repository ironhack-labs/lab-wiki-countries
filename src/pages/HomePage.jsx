import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const apiUrl = "https://ih-countries-api.herokuapp.com/countries";

  const [countriesData, setCountriesData] = useState([]);

  async function fetchCountries() {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setCountriesData(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCountries();
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
        {countriesData.map((country) => {
          return (
            <Link
              to={`/${country.alpha3Code}`}
              key={country.alpha3Code}
              className="list-group-item list-group-item-action"
            >
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code}.png`.toLowerCase()}
                alt={`flag-${country.alpha3Code}`}
                style={{ height: "16px", marginRight: "5px" }}
              />
              {country.name.common}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
