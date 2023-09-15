import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const countriesURL = "https://ih-countries-api.herokuapp.com/countries";
    axios
      .get(countriesURL)
      .then((response) => {
        console.log(response.data);
        setCountries(response.data);
      })
      .catch((e) => {
        console.log("Error getting list of Countries from the API");
      });
  }, []);

  return (
    <div>
      <h1>WikiCountries: Your Guide to the World</h1>
      <h2>List of Countries</h2>
      <ul>
        {countries.map((country, index) => (
          <li key={index}>
            <Link to={`/countries/${country.alpha3Code}`}>
              {country.alpha2Code ? (
                <>
                  <img
                    src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                    alt={`Flag of ${country.name.common}`}
                  />
                  {country.name.common}
                </>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default HomePage;
