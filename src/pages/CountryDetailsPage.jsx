import { Link } from "react-router-dom";
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

  const [selectedBorder, setSelectedBorder] = useState(null);

  const navigateToBorder = (border) => {
    setSelectedBorder(border);
  };

  useEffect(() => {
    if (selectedBorder) {
      window.location.href = `/${selectedBorder}`;
    }
  }, [selectedBorder]);

  return (
    <div>
      <h1>Country Details</h1>
      {resp.name && <p>{resp.name.common}</p>}
      <p>Capital: {resp.capital}</p>
      <p>Area: {resp.area} km2</p>
      <p>Borders:</p>
      <ul>
        {resp.borders && resp.borders.length > 0 ? (
          resp.borders.map((border) => (
            <p key={border} onClick={() => navigateToBorder(border)}>
              <Link to={`/${border}`}>{border}</Link>
            </p>
          ))
        ) : (
          <p>No borders</p>
        )}
      </ul>
    </div>
  );
}

export default CountryDetails;

/*<img
src={`https://flagpedia.net/data/flags/icon/72x54/${resp.alpha2Code.toLowerCase()}.png`}
alt={country.name.common}
/>*/
