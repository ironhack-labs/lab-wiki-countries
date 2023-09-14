import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HomePage() {
  // Create a state variable to store the list of countries
  //const [countries, setCountries] = useState([]);

  return (
    <div className="container">
      <h1 className="mt-5">WikiCountries: Your Guide to the World</h1>
    </div>
  );

  useEffect(() => {
    // Define the API endpoint URL
    const apiUrl = 'https://ih-countries-api.herokuapp.com/countries';

    // Make a GET request to the API
    axios
      .get(apiUrl)
      .then((response) => {
        // Set the list of countries in the state
        setCountries(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // The empty dependency array means this effect runs once on component mount

  return (
    <div>
      <h1>WikiCountries: Your Guide to the World</h1>
      <h2>List of Countries</h2>
      <ul>
        {countries.map((country) => (
          <li key={country.alpha3Code}>
            {country.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
