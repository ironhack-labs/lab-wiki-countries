import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HomePage() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://ih-countries-api.herokuapp.com/countries');
        console.log(response.data); // Verifica la estructura de los datos en la consola
        setCountries(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);



    return (
    <div>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">WikiCountries</a>
        </div>
      </nav>
      <div className="container" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
        <h1 style={{ color: 'red', fontSize: '24px' }}>LAB | React WikiCountries</h1>

        <div className="list-group">
          {countries.map(country => (
            <a key={country.cca3} className="list-group-item list-group-item-action" href={`/${country.cca3}`}>
              {country.flag} {country.name.common}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
    
}

export default HomePage;
