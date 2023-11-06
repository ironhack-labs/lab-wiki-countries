import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function CountryDetails() {
  const { countryId } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`);
        setCountry(response.data);
      } catch (error) {
        console.error('Error fetching country data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountryData();
  }, [countryId]);

  if (loading || !country) {
    return <div>Loading...</div>;
  }

  return (
    <div className="country-details-main">
      <h1>Country Details</h1>
      <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} 
      alt={`Flag of ${country.name.common}`} />
      <h2>{country.name.common}</h2>
      <p><strong>Capital:</strong> {country.capital}</p>
      <p><strong>Area:</strong> {country.area} km²</p>
      <p><strong>Borders:</strong></p>
      <ul>
        {country.borders.map((border, index) => (
          <li key={index}>
            <Link to={`/${border}`}>{border}</Link> 
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountryDetails;