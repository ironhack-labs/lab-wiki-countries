import React from "react";
import countries from '../countries.json';

const CountryDetails = props => {

  const getCountry = (code) => countries.filter(oneCountry => oneCountry.code === code)[0];
  
  const { params } = props.match;

  const foundCountry = getCountry(params.cca3);
  console.log(foundCountry)

    return (
        
        <div id="Country-Details-Component" name={props.name}>
        <h1>{foundCountry.name.common}</h1>
        <hr />
        <p>{foundCountry.area}</p>
        <hr />
        <p>{foundCountry.borders}</p>
        <hr />
        </div>
    )
} 

export default CountryDetails;
