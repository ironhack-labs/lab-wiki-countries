import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage() {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((result) => {
        console.log(result.data);
        setCountriesData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>WikiCountries</h1>
      {countriesData.map((country) => {
        return (
          <div key={country._id}>
            <Link to={`/${country.alpha3Code}`}>
              <img
                src={` https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt=""
              />
              <p>{country.name.common}</p>
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default HomePage;
