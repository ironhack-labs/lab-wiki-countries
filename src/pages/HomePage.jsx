import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage() {
  const [countries, setCountries] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiURL = "https://ih-countries-api.herokuapp.com/countries";

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      console.log(response.data);
      setCountries(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <div
      className="container"
      style={{ maxHeight: "90vh", overFlow: "scroll" }}
    >
      <h1 style={{ fontSize: "24px" }}>
        WikiCountries: Your Guide to the World
      </h1>
      {loading && <p>Loading ...</p>}

      {!loading &&
        countries.map((country) => {
          return (
              <div className="list-group" key={country._id}>
            <Link to={`/${country.alpha3Code}`}>
                <div className="list-group-item list-group-item-action">
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  alt=""
                />
                {country.name.common}
                </div>
            </Link>
              </div>
          );
        })}
    </div>
  );
}

export default HomePage;
