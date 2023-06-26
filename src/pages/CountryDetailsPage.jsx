import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function CountryDetails() {
  const { countryId } = useParams();
  //   const [fetching, setFetching] = useState(true);
  const [country, setCountry] = useState(null);

  useEffect(() => {
    console.log("useEffect - Find specific country");
    const apiURL = `https://ih-countries-api.herokuapp.com/countries/${countryId}`;
    axios
      .get(apiURL)
      .then((response) => {
        setCountry(response.data);
        console.log("response.data =", response.data);
        // setFetching(false);
      })
      .catch((err) => console.log("stg happened", err));
  }, []);

  console.log("countryId", countryId);
  console.log("foundCountry =", country);

  if (!country) return "loading...";

  return (
    <div className="CountryDetails">
      <h1>Country details</h1>
      <h2> {country.name.common}</h2>
      <table>
        <tr>
          <td>Capital :</td>
          <td>{country.capital} </td>
        </tr>
        <tr>
          <td>Area :</td>
          <td>{country.area} m²</td>
        </tr>
        <tr>
          <td>Border countries : </td>
          <td>
            {" "}
            <ul>
              {country.borders.map((borderCountry) => {
                return (
                  <li key={borderCountry}>
                    <a href={`/${borderCountry}`}> {borderCountry} </a>
                  </li>
                );
              })}
            </ul>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default CountryDetails;
