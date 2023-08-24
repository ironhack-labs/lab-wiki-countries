import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const [fetching, setFetching] = useState(true);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setCountries(response.data);
        setFetching(false);
        console.log(response.data);
      });
  }, []);

  return (
    <div>
      <h2>WikiCountries: Your Guide to the World</h2>
      {fetching && <p>Loading...</p>}
      {countries.map((country) => {
        return (
          <div key={country._id}>
            <Link to={`/${country.alpha3Code}`}>{country.name.common}</Link>
          </div>
        );
      })}
    </div>
  );
}

export default HomePage;
