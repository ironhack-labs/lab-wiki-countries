import React from 'react';
import countries from "./../countries.json";

const CountryDetails = (props) => {
    const countryCode = props.match.params.cca3;
    const foundCountry = countries.find( (countries)=> {
        return countries.cca3 === countryCode;
    })
  return (
    <div>
      <h1>{foundCountry.name.common}</h1><br />
      <p>Capital: {foundCountry.capital} km2</p>
      <p>Area: {foundCountry.area} km2</p>
      <p>Borders:</p>
      <ul>
      {foundCountry.borders.map((el)=>{
          return(
            <li>{countries.find( (countries)=> {return countries.cca3 === el}).name.common}</li>
          )
      })}
      </ul>
          
    </div>
  );
};

export default CountryDetails;
