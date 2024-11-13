import { useEffect, useState } from "react";
import CountryListItem from "../components/CountryListItem";

function HomePage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function getCountries() {
      const response = await fetch(
        "https://ih-countries-api.herokuapp.com/countries"
      );
      const data = await response.json();
      setCountries(data);
    }
    getCountries();
  }, []);

  return (
    <div className="container" style={{ maxHeight: "90vh", overflow: scroll }}>
      <h1 style={{ fontSize: "24px" }}>
        WikiCountries: Your Guide to the World
      </h1>

      <div className="list-group">
        {countries.map((country, index) => {
          return (
            <CountryListItem
              countryCode={country.alpha3Code}
              country2Code={country.alpha2Code}
              countryName={country.name.common}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
