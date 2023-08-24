import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage() {
  const [fetching, setFetching] = useState(true);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        setCountries(response.data);
        setFetching(false);
        console.log(response.data);
      });
  }, []);

  return (
    <div
      className="container"
      style={{ maxHeight: "90vh", overflow: "scroll" }}
    >
      <h2 style={{ fontSize: "24px" }}>
        WikiCountries: Your Guide to the World
      </h2>
      <div className="list-group">
        {fetching && <p>Loading</p>}
        {countries.map((country) => {
          return (
            <div
              className="list-group-item list-group-item-action"
              key={country._id}
            >
              <Link to={`/${country.alpha3Code}`}>
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  alt="flag"
                />
                <h5>{country.name.common}</h5>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
