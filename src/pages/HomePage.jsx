import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage() {
  const [countries, setCountries] = useState([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    console.log("useEffect - Initial render (Mounting)");
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        setCountries(response.data);
        console.log("response.data: ", response.data);
        setFetching(false);
      })
      .catch((error) => {
        console.error("Error fetching countries data:", error);
        setFetching(false);
      });
  }, []);

  // if (fetching) {
  //   return <p>Loading...</p>;
  // }

  return (
    <div
      className="container"
      style={{ maxHeight: "90vh", overflow: "scroll" }}
    >
      <h1 style={{ fontSize: "24px" }}>
        WikiCountries: Your Guide to the World
      </h1>
      {fetching ? (
        <p>Loading</p>
      ) : (
        <ul className="list-group">
          {countries.map((country) => {
            return (
              <li key={country._id} className="list-group">
                <Link
                  className="list-group-item list-group-item-action"
                  to={country.alpha3Code}
                >
                  <img
                    src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                    alt="{`{country.name.official} flag`}"
                    style={{ display: "block", margin: "0 auto 20px auto" }}
                  ></img>
                  {country.name.common}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default HomePage;
