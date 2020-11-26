import React from 'react'
import { Link } from 'react-router-dom'
import jsonCountries from '../countries.json'

function Home() {
    const countries = jsonCountries
    console.log("home page")
  return (
    <div>
      <h1 className="title">Home</h1>
      <ul>
        {countries.map((country) => (
          <li>
            <Link to={`/countries/${country.cca3}`}>{country.name.common}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
