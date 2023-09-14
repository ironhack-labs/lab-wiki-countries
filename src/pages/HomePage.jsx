import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage() {
  const [countries, setCountries] = useState(null);

  const baseUrl = "https://ih-countries-api.herokuapp.com/countries";

  useEffect(() => {
    axios
      .get(baseUrl)
      .then((response) => {
        setCountries(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const renderList = () => {
    if (countries === null) {
      return <p>loading....</p>;
    }

    return countries.map((country, index) => {
      return (
        <Link
          to={country.alpha3Code}
          className="list-group-item list-group-item-action"
          key={index}
        >
          <h4>{country.name.common}</h4>
          <img
            src={
              "https://flagpedia.net/data/flags/icon/72x54/" +
              country.alpha2Code.toLowerCase() +
              ".png"
            }
            alt="flag"
          />
        </Link>
      );
    });
  };

  return (
    <div
      className="container"
      style={{ maxHeight: "90vh", overflow: "scroll" }}
    >
      <h1 style={{ fontSize: "24px" }}>
        WikiCountries: Your Guide to the World
      </h1>

      <div className="list-group">{renderList()}</div>
    </div>
  );
}

export default HomePage;
