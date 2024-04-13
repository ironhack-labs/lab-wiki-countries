import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function HomePage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((res) => {
        console.log(res);
        setCountries(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <div className="container">
        <h2>WikiCountries: Your Guide to the World</h2>
        <div className="list-group">
          {countries.map((country) => {
            const flagUrl = `https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`;
            return (
              <Link
                to={country.alpha3Code}
                key={country._id}
                className="list-group-item list-group-item-action"
              >
                <img src={flagUrl} alt="" />
                {country.name.common}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default HomePage;
