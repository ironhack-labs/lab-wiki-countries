import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CountryDetailsCard from "../components/CountryDetailsCard";

function CountryDetails() {
  const [country, setCountry] = useState({});
  const [allCountries, setAllCountries] = useState([]);
  const { countryCode } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    axios;
    const countryRequest = axios.get(
      `https://ih-countries-api.herokuapp.com/countries/${countryCode}`
    );
    const allCountriesRequest = axios.get("https://ih-countries-api.herokuapp.com/countries");

    Promise.all([countryRequest, allCountriesRequest])
      .then(([countryResponse, allCountriesResponse]) => {
        setCountry(countryResponse.data);
        setAllCountries(
          allCountriesResponse.data.map((e) => ({
            name: e.name.official,
            alpha3Code: e.alpha3Code,
          }))
        );
        setLoading(false);
      })
      .catch((error) => {
        console.log("fetching error", error);
        setError(true);
        setLoading(false);
      });
  }, [countryCode]);

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

  return <CountryDetailsCard country={country} allCountries={allCountries} />;
}

export default CountryDetails;
