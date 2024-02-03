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
          {/* console.log(`${country.name.common} flag`); */}

          let flagCode = country.alpha2Code.toLowerCase();
          {
            /* I stored it in a variable to get it easily below  */
          }
          return (
            <Link className="country-name" key={country._id} to={"/" + country.alpha3Code}>
              <li className="country-item" >
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${flagCode}.png`}
                  alt={`${country.name.common} + flag`}
                ></img>
                {/*I use alpha3Code to get the name of the Country after the slash"/" in the domain */}
                {country.name.common}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default HomePage;
