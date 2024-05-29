import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage() {
  const [countries, setCountries] = useState(null);

  async function getCountries() {
    try {
      const response = await axios.get(
        "https://ih-countries-api.herokuapp.com/countries"
      );

      setCountries(
        response.data.sort((a, b) => a.name.common.localeCompare(b.name.common))
      );
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div
      className="container"
      style={{ maxHeight: "90vh", overflow: "scroll" }}
    >
      <h1 style={{ fontSize: "24px" }}>
        WikiCountries: Your Guide to the World
      </h1>

      {countries ? (
        countries.map((country) => (
          <div className="list-group" key={country._id}>
            <Link
              className="list-group-item list-group-item-action"
              to={`/${country.alpha3Code}`}
            >
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt="country flag"
              />
              <h3>{country.name.common}</h3>
            </Link>
          </div>
        ))
      ) : (
        <p>🕐Loading...</p>
      )}
    </div>
  );
}
export default HomePage;
