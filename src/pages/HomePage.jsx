import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function HomePage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://ih-countries-api.herokuapp.com/countries')
      .then(response => {
        setCountries(response.data);
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
      });
  }, []);

  return (
    <div>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <a className="navbar-brand" href="/">WikiCountries</a>
      </nav>

      <div className="container" style={{ maxHeight: '90vh', overflowY: 'scroll' }}>
        <h1 style={{ fontSize: '24px' }}>WikiCountries: Your Guide to the World</h1>

        <div className="list-group">
          {countries.map(country => {
            // Comprobación de que 'cca2' existe antes de usarlo
            const flagUrl = country.cca2
              ? `https://flagpedia.net/data/flags/icon/72x54/${country.cca2.toLowerCase()}.png`
              : 'https://via.placeholder.com/30'; // URL de un placeholder para banderas no disponibles

            return (
              <Link
                key={country.cca3}
                className="list-group-item list-group-item-action"
                to={`/${country.cca3}`}
              >
                <img
                  src={flagUrl}
                  alt={`${country.name.common} flag`}
                  style={{ width: '30px', marginRight: '10px' }}
                />
                {country.name.common}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
