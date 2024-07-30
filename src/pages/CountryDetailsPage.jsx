import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "../App.css"; 

function CountryDetailsPage() {
  const { countryCode } = useParams(); 
  const [country, setCountry] = useState(null); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${countryCode}`)
      .then((response) => {
        setCountry(response.data); 
        setLoading(false); 
      })
      .catch((error) => {
        console.log(error);
        setLoading(false); 
      });
  }, [countryCode]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <div className="container">
      <h1>{country.name.common}</h1>
      <p><strong>Capital:</strong> {country.capital}</p>
      <p><strong>Area:</strong> {country.area} km²</p>

      <h3>Border Countries:</h3>
      <ul>
        {country.borders && country.borders.length > 0 ? (
          country.borders.map((border) => (
            <li key={border}>
              <Link to={`/${border}`}>{border}</Link>
            </li>
          ))
        ) : (
          <p>No border countries</p>
        )}
      </ul>
    </div>
  );
}

export default CountryDetailsPage;
