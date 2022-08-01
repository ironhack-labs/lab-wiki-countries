import jsonData from './../countries.json'
import { useState } from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

const CountryList = () => {
  const [countries ,setCountries] = useState(jsonData)
  return (
    <div>
      {countries.map((country) => {
        return (
          <div key={country.alpha3Code} >
            <BrowserRouter>
              <Link to={country.alpha3Code} > {country.name.official} </Link>
            </BrowserRouter>
          </div>
        )
      })}
    </div>
  );
}

export default CountryList;