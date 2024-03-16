import axios from "axios";
import { useState, useEffect } from "react";

const countriesAPI = "https://ih-countries-api.herokuapp.com/countries";

function HomePage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get(countriesAPI).then((response) => {
      const countries = response.data;
      setCountries(countries);
      console.log(countries);
    });
  }, []);

  return (
    <div>
      <h2>WikiCountries: Your Guide to the World</h2>
      <ul>
        {countries.map((country) => {
          return (
            <li className="countries-list" key={country._id}>
              {country.name.common}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default HomePage;
