import React from 'react';
import countries from '../countries.json';


const CountryDetail = (props) => {
    
    const getCountry = (cca3) => {
        const theCountry = oneCountry => {
          return oneCountry.cca3 === cca3;
        }
        return countries.find(theCountry)
      };

      const { params } = props.match;
      const foundCountry = getCountry(params.cca3);

    return (
        <div>
            <h1>{foundCountry.name}</h1>
            <h3>Capital: {foundCountry.capital}</h3>
            <h3>Area: {foundCountry.area}</h3>
            <h3>Borders: {foundCountry.borders}</h3>
        </div>
    )
}

export default CountryDetail;