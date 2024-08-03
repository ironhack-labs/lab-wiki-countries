import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const CountryDetailsPage = () => {
  const { alpha3Code } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        console.log(`Fetching data for country code: ${alpha3Code}`);
        const response = await axios.get(
          `https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`
        );
        console.log("API response:", response.data);
        setCountry(response.data);
        setLoading(false);
      } catch (err) {
        console.error("API request failed:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCountryData();
  }, [alpha3Code]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!country) return <p>No country data found.</p>;

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area} km²</p>
      <h2>Borders:</h2>
      <ul>
        {country.borders.map((border) => (
          <li key={border}>
            <Link to={`/${border}`}>{border}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryDetailsPage;
