import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [fetching, setFetching] = useState(true);

  const [countries, setCountries] = useState([]);

  // useEffect to set an effect that will make a GET request to the API for the countries data
  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        setCountries(response.data);
        setFetching(false);

        console.log(response.data);
      });
  }, []); // useEffect will run this code only when the component is mounted (created)

  return (
    <div>
      <h3>WikiCountries: Your Guide to the World</h3>
      {/* if fetching return message saying loading */}
      {fetching && <p>Loading...</p>}

      {/* map throught the countries to print the name of all countries */}
      {countries.map((country) => {
        return (
          <div key={country._id}>
            <Link to={`/${country.alpha3Code}`}>
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt="Country Flag"
              />
              <h3>{country.name.common}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default HomePage;
