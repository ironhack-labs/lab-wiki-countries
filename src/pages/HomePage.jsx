import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function HomePage() {
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    axios.get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        console.log(response.data);
        setCountries(response.data);
      })
  }, []);

  return (
    <div className="container" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <h1 style={{ fontSize: '24px' }}>WikiCountries: Your Guide to the World</h1>

      {countries &&
        <div className="list-group">
          {countries.map(country => (
            <Link to={`/${country.alpha3Code}`} className="list-group-item list-group-item-action" key={country.alpha3Code}>
              <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} 
              alt={`${country.name.common}'s flag`} />
              {country.name.common}
            </Link>
          ))}
        </div>
      }

    </div>
  );
}

export default HomePage;

