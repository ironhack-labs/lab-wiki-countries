import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Axios from "axios";

function CountryDetails() {
  const { countryId } = useParams();
  const [countryDetails, setCountryDetails] = useState(null);

  const fetchCountryDetails = async () => {
    try {
      const response = await Axios.get(
        `https://restcountries.com/v3/alpha/${countryId}`
      );
      setCountryDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCountryDetails();
  }, [countryId]);

  if (!countryDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{countryDetails[0].name.common}</h1>
      <p>Capital: {countryDetails[0].capital}</p>
      <p>Population: {countryDetails[0].population}</p>
      <p>Borders:</p>
      <ul>
        {countryDetails[0].borders
          ? countryDetails[0].borders.map((border) => (
              <li key={border}>
                <Link to={`/countries/${border}`}>{border}</Link>
              </li>
            ))
          : "No borders"}
      </ul>
    </div>
  );
}

export default CountryDetails;
