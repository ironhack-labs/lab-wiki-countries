import { useState, useEffect } from "react";
import { Navigate, Link } from "react-router-dom";
import axios from "axios";

const apiURL = "https://ih-countries-api.herokuapp.com/countries";

function HomePage() {

  const [countries, setCountries] = useState([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    console.log("useEffect - Initial render (Mounting)");
    axios.get(apiURL)
      .then((response) => {
      setCountries(response.data);
      setFetching(false);
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
        setFetching(false);
    });
  }, []);

  return (
    <div>
      <h1>WikiCountries: Your Guide to the World</h1>
    
      {fetching ? <p>Loading ...</p> : null} {/* Show "Loading ..." while fetching */}
    
      <ul>
        {countries.map((country) => (
          <li key={country.alpha3Code}>
            <Link to={`/country/${country.alpha3Code}`}>
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={`${country.name} Flag`}
              />
              {country.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
  



export default HomePage;
