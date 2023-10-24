import React, { useState, useEffect } from 'react';

function AllCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h2>All Countries</h2>
      <ul>
        {countries.map((country) => (
          <li key={country.alpha3Code}>
            <a href={`/countries/${country.alpha3Code}`}>
              {country.name} ({country.alpha3Code})
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllCountries;
