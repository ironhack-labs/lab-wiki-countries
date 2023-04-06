import React from "react";
import { useParams } from "react-router-dom";

function CountryDetails({ countries }) {
  const { id } = useParams();
  const country = countries.find((country) => country.alpha3Code === id);

  return (
    <div className="CountryDetails">
      {country && (
        <div>
          <h1>{country.name.common}</h1>
        </div>
      )}
    </div>
  );
}

export default CountryDetails;
