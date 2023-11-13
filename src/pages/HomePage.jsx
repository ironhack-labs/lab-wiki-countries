import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  console.log(countries);
  return (
    <div >
      <h1>WikiCountries: Your Guide to the World</h1>
      <div className="test">
      {countries.map((countryDetails) => {
        return (
          <Link className="countriesBox" to={`/${countryDetails.alpha3Code}`}>
            <div>
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetails.alpha2Code.toLowerCase()}.png`}
              />
              <p>{countryDetails.name.common}</p>
            </div>
          </Link>
        );
      })}
      </div>
    </div>
  );
}

export default HomePage;
