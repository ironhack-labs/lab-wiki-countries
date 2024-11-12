import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const apiUrl = "https://ih-countries-api.herokuapp.com/countries";

function HomePage() {
  const [countriesArray, setCountriesArray] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getCountries() {
    try {
      const response = await fetch(apiUrl);
      const jsonResponse = await response.json();
      setCountriesArray(jsonResponse);
      setLoading(false);
    } catch (error) {
      console.log("This is the error: ", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div>
      <h1>WikiCountries: Your Guide to the World</h1>
      {loading ? (
        <h3>Loading countries...</h3>
      ) : (
        countriesArray.map((country) => (
          <article key={country._id}>
            <Link to={`/countries/${country.alpha3Code}`}>
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt={`Flag of ${country.name.common}`}
              />
              <h3>{country.name.common}</h3>
            </Link>
          </article>
        ))
      )}
    </div>
  );
}

export default HomePage;
