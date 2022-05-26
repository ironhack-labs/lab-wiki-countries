import React from 'react'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import countries from '../countries.json'

function CountriesList(props) {
    const [countryList, setCountryList] = useState([]);

    useEffect(() => {
        setCountryList(countries);
      }, []);
 
  return (
        <div>
        
          {countryList.map((country) => {
            return (
              <div key={country.alpha3Code} className="countries">
              <Link to= {`/${country.alpha3Code}`}> {country.name.official}</Link>
              </div>
            );
          })}
        </div>
      );
    }
  

export default CountriesList