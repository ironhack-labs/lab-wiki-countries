import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./HomePage.css";

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
          return (
            <li className="country-item" key={country._id}>
              <span>{country.name.common}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default HomePage;
