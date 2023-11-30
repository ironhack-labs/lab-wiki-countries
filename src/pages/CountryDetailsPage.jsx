// CountryDetailsPage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function CountryDetails() {
  const [countryDetails, setCountryDetails] = useState(null);
  const { countryId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://ih-countries-api.herokuapp.com/countries/${countryId}`
        );

        setCountryDetails(response.data);
      } catch (error) {
        console.error("Error fetching country details:", error);
      }
    };

    fetchData();
  }, [countryId]);

  return (
    <div>
      <h1>Country Details</h1>
      {countryDetails && (
        <div>
          <h2>{countryDetails.name.common}</h2>
        </div>
      )}
    </div>
  );
}

export default CountryDetails;
