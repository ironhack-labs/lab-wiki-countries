import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage() {
  const [countries, setCountries] = useState(['']);
  const [fetching, setFetching] = useState(true);

  const apiUrl = "https://ih-countries-api.herokuapp.com/countries";

  useEffect(() => {
    axios.get(apiUrl)
      .then((response) => {
        setCountries(response.data);
        setFetching(false);
        console.log(response.data)
      })

    
  }, []);

  return (
    <div className="main-div">
      <h1>WikiCountries: Your Guide to the World.</h1>
      {fetching ? (
        <p>Loading countries...</p>
      ) : (
        <div className="container">
            <ul>
            {countries.map((country) => (
            <li key={country.alpha3Code} className="list-group"> 
              <Link to={`/${country.alpha3Code}`} className="no-link-effect">
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" />
                            <p>{country.name.common}</p>
</Link>
                    </li>
                
                ))}
            </ul>
        </div>
      )}
    </div>
  );
}

export default HomePage;
