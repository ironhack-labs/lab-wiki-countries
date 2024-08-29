import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function CountryDetails() {
  const { alpha3Code } = useParams(); // Extract the alpha3Code from the URL parameters
  const [country, setCountry] = useState(null); // State to store the country details
  const [loading, setLoading] = useState(true); // State to handle the loading state
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Fetch country data whenever alpha3Code changes
    axios.get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`)
      .then(response => {
        setCountry(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching country details:', error);
        setError('Country not found');
        setLoading(false);
      });
  }, [alpha3Code]);

  // Display loading message while data is being fetched
  if (loading) return <p>Loading...</p>;
  
  // Display error message if there's an error fetching the data
  if (error) return <p>{error}</p>;

  return (
    <div>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>
      <div className="container">
        <p style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</p>
        {country && (
          <>
            <h1>{country.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{ width: "30%" }}>Capital</td>
                  <td>{country.capital ? country.capital[0] : 'N/A'}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {country.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    {country.borders && country.borders.length > 0 ? (
                      <ul>
                        {country.borders.map(border => (
                          <li key={border}>
                            <Link to={`/${border}`}>{border}</Link>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>No bordering countries</p>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
}

export default CountryDetails;
