import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function CountryDetails() {
  const { countryId } = useParams();
  const [countryDetails, setCountryDetails] = useState(null);

  useEffect(() => {
    axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
      .then((response) => {
        setCountryDetails(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log('Error getting details from API...')
        console.log(error)
      });
  }, [countryId]);

  return (
    <>
      {!countryDetails ? (
        <p>loading...</p>
      ) : (
        <>
          <p>{countryId}</p>
          <h2>Country Details</h2>
          <div>
            <h1>{countryDetails.name.common}</h1>
            <p>Capital: {countryDetails.capital}</p>
            <p>Area: {countryDetails.area} km<sup>2</sup></p>
            {countryDetails.borders && (
              <>
                <p>Bordering countries:</p>
                <ul>
                  {countryDetails.borders.map((border) => (
                    <li key={border}>
                      <Link to={`/countries/${border}`}>{border}</Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default CountryDetails;
