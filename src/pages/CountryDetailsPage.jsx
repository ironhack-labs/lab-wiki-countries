
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const CountryDetailsPage = () => {
  const { countryId } = useParams(); 
  const [country, setCountry] = useState(null);

  
  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`);
        setCountry(response.data);
      } catch (error) {
        console.error('Error fetching country data:', error);
      }
    };

    fetchCountryData();
  }, [countryId]);

 
  if (!country) return <p>Loading...</p>;

  
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>{country.name.common}</h1>
          <p><strong>Capital:</strong> {country.capital}</p>
          <p><strong>Area:</strong> {country.area} km²</p>
          <p><strong>Borders:</strong></p>
          <ul>
            {country.borders.map((border) => (
              <li key={border}>
                <Link to={`/${border}`}>{border}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CountryDetailsPage;