import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const apiUrl = "https://ih-countries-api.herokuapp.com/countries";

    axios.get(apiUrl)
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error("Error fetching countries data: ", error);
      });
  }, []);

  return (
    <div className="container" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <h1 style={{ fontSize: '24px', fontWeight: "bold" }}>WikiCountries: Your Guide to the World</h1>

      <div className="list-group">
        {countries.map((country) => {
          return <div key={country._id}>
            <Link to={`/${country.alpha3Code}`} className="list-group-item list-group-item-action">
              
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.name.common}/><br></br>
              {country.name.common}
            </Link>
          </div>
        })}
      </div>
    </div>
  );
}