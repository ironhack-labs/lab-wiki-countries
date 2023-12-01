import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function HomePage() {
  const apiURL = 'https://ih-countries-api.herokuapp.com/countries';
  const [countries, setCountries] = useState([]);

  useEffect((props) => {
    axios.get(apiURL).then((resp) => setCountries(resp.data));
  }, []);

  return (
    <>
      <h1>WikiCountries: Your Guide to the World</h1>
      {countries.map((country) => {
        return (
          <div key={country._id}>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="Country Flag" />
            <Link to={`/${country.alpha3Code}`}>{country.name.common} </Link>
          </div>
        );
      })}
    </>
  );
}
