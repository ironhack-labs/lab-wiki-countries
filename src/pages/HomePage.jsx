import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div
        className="container"
        style={{ maxHeight: "90vh", overflow: "scroll" }}
      >
        <h1 style={{ fontSize: "24px" }}>
          WikiCountries: Your Guide to the World
        </h1>
        {countries && (
          <div className="list-group">
            {countries.map((country) => {
              return (
                <Link
                  key={country._id}
                  className="list-group-item list-group-item-action"
                  to={`/${country.alpha3Code}`}
                >
                  <img
                    src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  />
                  <p>{country.name.common}</p>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default HomePage;
