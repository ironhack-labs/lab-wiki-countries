import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        setCountries(response.data);
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
        {countries.map((country) => (
          <Link to={`/${country.alpha3Code}`} key={country.alpha3Code}>
            <a className="list-group-item list-group-item-action">
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              ></img>
              <br></br>
              {country.name.common}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
