//CountriesPage.jsx
import React from "react";
import {useEffect, useState} from 'react';
import axios from "axios";
import { Link } from "react-router-dom";


function CountriesPage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://ih-countries-api.herokuapp.com/countries')
      setCountries(response.data);
      } catch (error) {
        console.error("Error fetching countries.", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Countries</h1>
      <ul>
      {countries.map((country) => (
  <li key={country.cca3}>
    <Link to={`/countries/${country.cca2}`}>
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/cz.png`} //I know about the flag
        alt={`${country.name.common} flag`}
      />
      {country.name.common}
    </Link>
  </li>
))}
      </ul>
    </div>
  )
}

export default CountriesPage;
