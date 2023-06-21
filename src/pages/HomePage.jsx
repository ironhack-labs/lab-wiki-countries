import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

function HomePage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error("Error fetching countries", error);
      });
  }, []);

  if (!countries) return <p>Loading...</p>; 

  return (
    <div>
      <div className="container" style={{maxHeight: '90vh', overflow: 'scroll'}}>
        <h1 style={{fontSize: '24px'}}>WikiCountries: Your Guide to the World</h1>
        <div className="list-group">
        {countries.map((country) => (
  <div style={{border: 'solid black 1px', margin: '0', padding: '10px'}} key={country.alpha3Code}>
    {country.name.common}    
  </div>
))}



        </div>
      </div>
    </div>
  );
}

export default HomePage;

