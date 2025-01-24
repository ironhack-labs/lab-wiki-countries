import CountryCard from "../components/CountryCard";
import axios from "axios";
import { useState, useEffect } from "react";

function HomePage() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries`)
      .then((response) => {
        setCountries(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("fetching error", error);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (error)
    return (
      <div className="text-center mt-5">
        <p className="">There is a fetching error!</p>
      </div>
    );

  if (loading)
    return (
      <div className="text-center mt-5">
        <div className="spinner-border" role="status"></div>
        <p className="">Loading...</p>
      </div>
    );

  return (
    <div className="list">
      <h3 className="my-3"> WikiCountries: Your Guide to the World</h3>
      {countries.map((country) => (
        <CountryCard key={country.alpha3Code} country={country} />
      ))}
    </div>
  );
}

export default HomePage;
