import  { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function CountryDetails() {
  const { countryId } = useParams();
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
      .then(response => {
        setCountryData(response.data);
      })
      .catch(error => {
        console.error('Error fetching country data:', error);
      });
  }, [countryId]);

  if (!countryData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <h1>Country Details</h1>
      <h1>{countryData.name.common}</h1>
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${countryData.alpha2Code.toLowerCase()}.png`}
        alt={`${countryData.name.common} Flag`}
      />
      <p>Capital: {countryData.capital}</p>
      <p>Area: {countryData.area} km</p>
      <p>Borders:</p>
      <ul>
        {countryData.borders.map(border => (
          <li key={border}>
            <Link to={`/${border}`}>{border}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountryDetails;
