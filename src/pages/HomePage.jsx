import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const apiURL = "https://ih-countries-api.herokuapp.com/countries";

function HomePage() {
  const [fetching, setFetching] = useState(true);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    console.log("useEffect - Initial render (Mounting)");
    axios.get(apiURL).then((response) => {
      setCountries(response.data);
      console.log("response.data =",response.data)
      setFetching(false);
    }).catch(err => console.log("stg happened",err));
  }, []);

  if (!countries) return "loading..."

  return (
    <>
      <h1>WikiCountries: Your Guide to the World</h1>
      {countries.map((country) => {
        return (
          <div key={country._id} className="country">
            <h3>
              <Link to={`/${country.alpha3Code}`}><img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="flag"/> {country.name.common}</Link>
            </h3>
          </div>
        );
      })}
    </>
  );
}

export default HomePage;
