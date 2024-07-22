import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://ih-countries-api.herokuapp.com/countries"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        setCountries(data);
      } catch (error) {
        console.error("Error fetching the countries data:", error);
      }
    };

    fetchCountries();
  }, []);

  const filteredCountries = countries.filter((country) => {
    return country.name.common.toLowerCase().includes(filter.toLowerCase());
  });

  
  return (
    <>
      <label htmlFor="filter">
        Filter Countries...
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </label>
      <div className="container">
        <h1 className="mt-5">WikiCountries: Your Guide to the World</h1>
        <ul className="list-group mt-3">
          {filteredCountries.map((country) => (
            <li key={country.alpha3Code} className="list-group-item">
              <NavLink
                to={`/${country.alpha3Code}`}
                className="d-flex align-items-center text-decoration-none text-dark"
                style={({ isActive }) => ({
                  fontWeight: isActive ? "bold" : "normal",
                  color: isActive ? "blue" : "inherit",
                })}
              >
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  alt={`Flag of ${country.name.common}`}
                  className="me-2"
                  style={{ width: "50px", height: "auto" }}
                />
                {country.name.common}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default HomePage;
