import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function CountryDetails() {
  // State declarations
  const [countries, setCountries] = useState([]);
  const [foundCountry, setFoundCountry] = useState(null);
  const { countryId } = useParams();
  // Fetching
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    axios
      .get(" https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        setCountries(response.data);
        setFetching(false);
        const country = countries.find((oneCountry) => {
          return oneCountry._id === countryId;
        });
        if (country) {
          setFoundCountry(country);
        }
      });
  }, [countryId]);

  console.log(countryId);

  return (
    <div>
      <h1>"Country Details"</h1>
      {fetching && <img src="https://i.gifer.com/Z0Bj.gif"></img>}
      {foundCountry && (
        <div>
          {" "}
          <h2>{foundCountry.name.official}</h2>
          <Link to="/">Back</Link>
        </div>
      )}
    </div>
  );
}

export default CountryDetails;
