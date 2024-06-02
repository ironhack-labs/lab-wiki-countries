import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";
import { getCountries } from "../services/CountryServices";

function HomePage() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCountries()
      .then((countriesAPI) => {
        countriesAPI.sort((a, b) => a.name.common.localeCompare(b.name.common));
        setCountries(countriesAPI);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div
      className="container"
      style={{ maxHeight: "90vh", overflow: "scroll" }}
    >
      <h1 style={{ fontSize: "24px" }}>
        WikiCountries: Your Guide to the World
      </h1>
      {loading ? (
        <div className="container d-flex justify-content-center my-5">
          <PacmanLoader color="#C1C1C1" />
        </div>
      ) : (
        <div className="list-group">
          {countries.map((country) => {
            return (
              <div
                key={country._id}
                className="d-flex justify-content-around mb-3 p-2"
              >
                <Link
                  to={`/countries/${country.alpha3Code}`}
                  className="list-group-item list-group-item-action d-flex flex-column align-items-center"
                >
                  <img
                    src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                    style={{ width: "50px" }}
                  />
                  {country.name.common}
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default HomePage;
