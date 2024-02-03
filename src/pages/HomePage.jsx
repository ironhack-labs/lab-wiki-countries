import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((countries) => {
        //console.log(countries.data);
        setCountries(countries.data);
      })
      .catch((e) => {
        console.log(e);
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
        {countries.map((country) => {
          return (
            <Link
              key={country.alpha3Code}
              className="list-group-item list-group-item-action"
              to={country.alpha3Code}
            >
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              ></img>
              <h3>{country.name.common}</h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
