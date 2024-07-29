// src/pages/CountryDetailsPage.jsx
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const CountryDetailsPage = () => {
  const { countryId } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`)
      .then(response => setCountry(response.data))
      .catch(error => console.log(error));
  }, [countryId]);

  if (!country) {
    return <div className="container"><p>Loading...</p></div>;
  }

  return (
    <div className="container">
      <h1 className="mt-5">{country.name.common}</h1>
      <img src={`https://flagpedia.net/data/flags/h80/${country.alpha2Code.toLowerCase()}.png`} alt={country.name.common} />
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area} km²</p>
      <p>Borders:</p>
      <ul>
        {country.borders.map(border => (
          <li key={border}>
            <Link to={`/${border}`}>{border}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryDetailsPage;
