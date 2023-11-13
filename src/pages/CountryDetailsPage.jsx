import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../CountryDetailsPage.css"

function CountryDetails() {
  const { alpha3Code } = useParams();
  const [countryDetails, setCountryDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
      .then((response) => {
        console.log(response.data);
        setCountryDetails(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);
  return (
    <>
    <h1 >Country Details</h1>
    <hr />
    <div className="countryDetails">
      
      {countryDetails ? (
        <>
          <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetails.alpha2Code.toLowerCase()}.png`}
                  alt="country flag"
                />
          <h2>{countryDetails.name.common}</h2>
          <p>Capital: {countryDetails.capital[0]}</p>
          <p>Borders:</p>
          <ul>
            {countryDetails.borders.map((border) => (
              <li key={border} className="listBorder">
                <Link to={`/${border}`}>{border}</Link>
              </li>
            ))}
          </ul>
          <p>Area: {countryDetails.area}</p>
        </>
      ) : (
        <p>loading...</p>
      )}
    </div>
    </>
  );
}

export default CountryDetails;
