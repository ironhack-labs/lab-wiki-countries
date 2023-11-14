import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function HomePage() {
  const [countriesArray, setCountriesArray] = useState([]);
  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        setCountriesArray(response.data);
      })
      .catch((error) => console.log("error: ", error));
  }, []);

  return (
    <>
      <h1>WikiCountries: Your Guide to the World</h1>
      <div id="countries-grid">
        {countriesArray.map((country) => {
          return (
            <Link to={`/${country.alpha3Code}`}>
              <div className="Country">
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                ></img>
                <h2>{country.name.common}</h2>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default HomePage;
