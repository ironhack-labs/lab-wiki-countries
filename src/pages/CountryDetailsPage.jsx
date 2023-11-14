import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function CountryDetails() {
  console.log("CountryDetails invoked!")
  const { countryId } = useParams();

  const [countryDetails, setCountryDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
      .then((response) => {
        setCountryDetails(response.data);
      })
      .catch((error) => console.log("error: ", error));
  },[countryId]);

  return (
    <>
      <h1>Country Details</h1>
      {countryDetails === null ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>{countryDetails.name.common}</h1>
          <h2>Capital : {countryDetails.capital}</h2>
          <h2>Area : {countryDetails.area} km²</h2>
          {countryDetails.borders.length === 0 || countryDetails === null ? (
            <p>No borders</p>
          ) : (
            <>
              <h2>Borders :</h2>
              {countryDetails.borders.map((border) => {
                return (
                  <li>
                    <Link to={`/${border}`}>{border}</Link>
                  </li>
                );
              })}
            </>
          )}

          <Link to={`/`}>Back</Link>
        </>
      )}
    </>
  );
}

export default CountryDetails;
