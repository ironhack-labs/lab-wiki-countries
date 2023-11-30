import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

function CountryDetails() {
  const { countryId } = useParams();
  const apiURL =
    "https://ih-countries-api.herokuapp.com/countries/" + countryId;
  const { resp, error, loading } = useFetch(apiURL);
  console.log(resp);

  return (
    <div>
      <h1>Country Details</h1>
      <p>Country Name: </p>
      <p>Capital: {resp.capital}</p>
      <p>Area: {resp.area} km2</p>
      <p>Borders: {resp.borders}</p>
    </div>
  );
}

export default CountryDetails;

/*<img
src={`https://flagpedia.net/data/flags/icon/72x54/${resp.alpha2Code.toLowerCase()}.png`}
alt={country.name.common}
/>*/
