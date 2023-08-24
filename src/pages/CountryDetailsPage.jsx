import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function CountryDetails() {
  const [countryInfo, setCountryInfo] = useState(null);
  const [fetching, setFetching] = useState(true);
  const { countryId } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
      .then((response) => {
        setCountryInfo(response.data);
        setFetching(false);
      });
  }, [countryId]);

  return (
    <div>
      <h2>Country Details</h2>
      {!countryInfo && <h3>Country not found!</h3>}
      {countryInfo && (
        <div>
          <h2>{countryInfo.name.common}</h2>
          <h3>Capital: {countryInfo.capital}</h3>
          <p>Area: {countryInfo.area}</p>
          <Link to={`/${countryInfo.alpha3Code}`}>
            Borders: {countryInfo.borders}
          </Link>
        </div>
      )}
      <Link to="/">Back</Link>
    </div>
  );
}

export default CountryDetails;
