import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function CountryDetails() {
  const [foundCountry, setFoundCountry] = useState(null);
  const [fetching, setFetching] = useState(true);

  const { countryAlpha3Code } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://ih-countries-api.herokuapp.com/countries/${countryAlpha3Code}`
      )
      .then((response) => {
        setFoundCountry(response.data);
        console.log(response.data);
        setFetching(false);
      })

  }, [countryAlpha3Code]);

  return (
    <div>
      <h3>Country Details</h3>

      {fetching && <p>Loading...</p>}

      {!fetching && !foundCountry && <p>Country not found!</p>}

      {foundCountry && (
        <div>
          <p>{foundCountry.name.common}</p>
          <p>{foundCountry.capital}</p>
          <p>{foundCountry.area} Km</p>

          <div>
            {foundCountry.borders.map((border) => {
              return <Link to={`/${border}`}>{border}</Link>;
            })}
          </div>
        </div>
      )}
     
    </div>
  );
}

export default CountryDetails;
