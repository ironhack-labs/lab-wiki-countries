import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function CountryDetailsPage() {
  const { countryAlphaCode } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const fetchCountryDetails = async () => {
      try {
        const response = await fetch(`https://ih-countries-api.herokuapp.com/countries/${countryAlphaCode}`);
        const data = await response.json();
        setCountry(data);
      } catch (error) {
        console.error('Error fetching country details:', error);
      }
    };

    if (countryAlphaCode) {
      fetchCountryDetails();
    }
  }, [countryAlphaCode]);

  if (!country) {
    return <div>Loading...</div>;
  }

  // Helper function to format the area
  const formatArea = area => {
    return `${new Intl.NumberFormat().format(area)} km²`;
  }; // meh

  return (
    <div className="container">
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Country Details</p>

      <h1>{country.name.common}</h1>
      <img 
                src={`https://flagcdn.com/${country.alpha2Code.toLowerCase()}.svg`} 
                alt={`Flag of ${country.name.common}`} 
                style={{ width: '5rem', height: '5rem' }}
              />
      <table className="table">
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{country.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>{formatArea(country.area)}</td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.length > 0 ? (
                  country.borders.map(border => (
                    <li key={border}>
                      <Link to={`/${border}`}>{border}</Link>
                    </li>
                  ))
                ) : (
                  <li>No bordering countries</li>
                )}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetailsPage;
