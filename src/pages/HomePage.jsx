import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function HomePage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        setCountries(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        WikiCountries: Your Guide to the World
      </h1>
      <div className="max-h-[90vh] overflow-y-scroll">
        <ul>
          {countries.map((country) => (
            <li key={country.alpha3Code}>
              <Link
                className="block p-2 border-b hover:bg-gray-200"
                to={`/${country.alpha3Code}`}
              >
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  alt={`${country.name.common} flag`}
                  className="inline mr-2"
                  width={50}
                />
                {country.name.common}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
