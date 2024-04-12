import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/Searchbar";

function HomePage() {
  const [countries, setCountries] = useState([]);

  // To fetch the list of countries, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        console.log(response);
        setCountries(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const toSearch = (searchTerm) => {
	const filtered = countries.filter((country) =>
		country.name.common.toLowerCase().includes(searchTerm.toLowerCase())

	);
	setCountries(filtered);
};

  return (
    <div className="container">
      <h1>WikiCountries: Your Guide to the World</h1>
      <h1>Search for a country</h1>
      <SearchBar toSearch={toSearch}/>
      {countries &&
        countries.map((country) => (
          <article key={country.id}>
            <Link to={`/country/details/${country.alpha3Code}`}>
              <h2>{country.name.common}</h2>
            </Link>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="country flag" />
          </article>
        ))}
    </div>
  );
}

export default HomePage;
