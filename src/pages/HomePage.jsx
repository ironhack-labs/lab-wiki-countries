import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
  <Link 
    to={`/${country.alpha3Code}`} 
    style={{border: 'solid black 1px', margin: '0', padding: '10px', display: 'block', textDecoration: 'none', color: 'black'}} 
    key={country.alpha3Code}
  >
    <div style={{ textAlign: 'center' }}>
      <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={`${country.name.common} flag`} style={{marginRight: '10px', display: 'block', margin: 'auto'}}/>
      {country.name.common}
    </div>
  </Link>
))}





        </div>
      </div>
    </div>
  );
}

export default HomePage;

