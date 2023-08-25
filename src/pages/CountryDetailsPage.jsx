import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function CountryDetails() {
  // State declarations
  const [foundCountry, setFoundCountry] = useState(null);
  const { countryId } = useParams();
  // Fetching
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
      .then((response) => {
        setFoundCountry(response.data);
        setFetching(false);
      });
  }, [countryId]);

  console.log(countryId);

  return (
    <div>
      <h1 className="mb-5">"Country Details"</h1>
      {fetching && <img src="https://i.gifer.com/Z0Bj.gif"></img>}
      {foundCountry && (
        <div>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`}
            width={100}
            height={80}
          />{" "}
          <h2>{foundCountry.name.official}</h2>
          <p>
            <b>Capital: </b>
            {foundCountry.capital}
          </p>
          <p>
            <b>Area: </b>
            {foundCountry.area}km²
          </p>
          <div>
            {foundCountry.borders.map((border) => {
              return <Link to={`/${border}`}>{border}</Link>;
            })}
          </div>
          <Link to="/">Back</Link>
        </div>
      )}
    </div>
  );
}

export default CountryDetails;
