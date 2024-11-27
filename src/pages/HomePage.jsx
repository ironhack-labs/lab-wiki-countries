import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function HomePage({ className }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        setCountries(response.data);
      });
    return () => {};
  }, []);
  return (
    <div
      className="container"
      style={{ maxHeight: "90vh", overflow: "scroll" }}
    >
      <h1 style={{ fontSize: "24px" }}>
        WikiCountries: Your Guide to the World
      </h1>

      <div className="list-group ">
        {countries.map((country) => {
          return (
            <Link
              className="list-group-item list-group-item-action"
              key={`${country.alpha3Code}`}
              to={`/${country.alpha3Code}`}
            >
              <img
                className="img-fluid"
                src={`https://flagcdn.com/16x12/${country.alpha2Code.toLowerCase()}.png`}
                srcSet={`
    https://flagcdn.com/32x24/${country.alpha2Code.toLowerCase()}.png 2x,
    https://flagcdn.com/48x36/${country.alpha2Code.toLowerCase()}.png 3x
  `}
                width="16"
                height="12"
                alt={`${country.name.common} flag`}
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
