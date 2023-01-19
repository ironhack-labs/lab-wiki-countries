import React, { useState, useEffect } from 'react';
import CountryDetails from './CountryDetails';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CountriesList = () => {
  const [countriesArr, setCountriesArr] = useState(null);

  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        //console.log(response.data);
        setCountriesArr(response.data);
      })
      .catch((e) => {
        console.log('There was an error', e);
      });
  }, []);

  if (!countriesArr) {
    return <p> Loading... </p>;
  }
  return (
    <div className="col-3">
      
        {countriesArr.map((country) => {
          return (
            <div className="list-group" key={country.alpha3Code}>
              <Link 
              to={`/country/${country.alpha3Code}`} 
              element={<CountryDetails country={country} countriesArr={countriesArr}/>}
              className="list-group-item"
              >
                {country.name.common}
              </Link>
            </div>
          );
        })}
      
    </div>
  );
};

export default CountriesList;
