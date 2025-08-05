import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const apiURL = "https://ih-countries-api.herokuapp.com/countries";
function CountryDetails() {
  const { countryId } = useParams();
  const [country, setCountry] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  console.log(country);
  useEffect(() => {
    axios.get(apiURL + "/" + countryId).then((response) => {
      setCountry(response.data);
      setIsLoading(false);
    });
  }, [countryId]);
  return (
    <div>
      <h1>Country Details</h1>
      {isLoading && <p>The Page is Loading</p>}
      {!isLoading && (
        <>
          <p>{country.name.common}</p>
          <p>{country.capital[0]}</p>
          <p>{country.area}</p>
          {country.borders.map((border) => {
            return (
              <Link to={apiURL + "/" + border} key={border}>
                <p>{border}</p>
              </Link>
            );
          })}
        </>
      )}
    </div>
  );
}

export default CountryDetails;
