import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function CountryDetails() {
  const { alpha3Code } = useParams();
  const [country, setCountry] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://restcountries.com/v2/alpha/${alpha3Code}`);
      setCountry(response.data);
    };
    fetchData();
  }, [alpha3Code]);

  return (
    <div>
      <h2>{country.name}</h2>
      <p>
        <strong>Capital:</strong> {country.capital}
      </p>
      <p>
        <strong>Region:</strong> {country.region}
      </p>
      <p>
        <strong>Subregion:</strong> {country.subregion}
      </p>
      <p>
        <strong>Population:</strong> {country.population}
      </p>
      <img src={country.flag} alt={country.name} style={{ maxWidth: "100%" }} />
    </div>
  );
}

export default CountryDetails;
