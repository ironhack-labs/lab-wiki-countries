import { useState, useEffect } from "react";
import axios from "axios";
import "./HomePage.css";
import { Link } from "react-router-dom";

function HomePage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries ")
      .then((result) => setCountries(result.data));
  }, []);

  return (
   
    <div id="HomePage">
      <h1>WikiCountries: Your Guide to the World</h1>
      <ul>
        {countries.map((country) => {
            console.log(`${country.name.common} flag`);

            let flagCode = country.alpha2Code.toLowerCase();
            {/* I stored it in a variable to get it easily below  */}
          return (
            <li className="country-item" key={country._id}>
              <img src={`https://flagpedia.net/data/flags/icon/72x54/${flagCode}.png`} alt={`${country.name.common} + flag`}></img>
              <Link to={country.alpha3Code}>
              {/*I use alpha3Code to get the name of the Country after the slash"/" in the domain */}
              {country.name.common}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );

  
}

export default HomePage;
