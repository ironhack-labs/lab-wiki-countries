import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function HomePage() {
    const [countriesData, setCountriesData] = useState([]);

    useEffect(() => {
        axios.get('https://ih-countries-api.herokuapp.com/countries')
            .then(response => {
                console.log(response.data);
                setCountriesData(response.data);
            })
            .catch(error => {
                console.error('Error fetching the countries data', error);
            });
    }, []);

    return (
        <div className="container">
        <h1 style={{ fontSize: '24px' }}>WikiCountries: Your Guide to the World</h1>
        <ul>
          {countriesData.map(country => (
            <li key={country.alpha3Code}>
              <Link to={`/${country.alpha3Code}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <img
                  src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                  alt={`${country.name.common} flag`}
                  style={{ marginRight: '10px' }}
                />
                {country.name.common}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

export default HomePage;
