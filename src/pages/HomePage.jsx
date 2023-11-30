import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ih-countries-api.herokuapp.com/countries"
        );
        setCountries(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>WikiCountries: Your Guide to the World</h1>
      <div>
        <h1>List of Countries</h1>
        <ul>
          {countries.map((country, index) => (
            <div key={index}>
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={`${country.name.common} flag`}
              />
              <Link to={`/${country.alpha3Code}`}>{country.name.common}</Link>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}

export default HomePage;
