
import { useEffect, useState } from "react";
import { fetchCountries } from "../services/countriesService";

const CountriesList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      const countriesData = await fetchCountries();
      setCountries(countriesData);
    };
    getCountries();
  }, []);

  return (
    <div>
      <h1>List of Countries</h1>
      <ul>
        {countries.map((country) => (
          <li key={country.alpha3Code}>{country.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CountriesList;