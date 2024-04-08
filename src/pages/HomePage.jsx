import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

function HomePage() {
  const [countries, setCountries] = useState([]);

  const fetchData = async () => {
    try {
      const response = await Axios.get(
        "https://ih-countries-api.herokuapp.com/countries"
      );
      setCountries(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>WikiCountries: Your Guide to the World</h1>
      <div>
        {countries.map((country) => (
          <div key={country._id}>
            <Link to={`/${country.alpha3Code}`}>
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={country.name.common}
              />
              {country.name.common}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
