import React from "react";
import countries from '../countries.json'

const countryDetails =(props)=>{
    const getCountry = id =>countries.find(oneCountry => oneCountry.cca3 === id);
    const foundCountry = getCountry(props.match.params.id)
      return (
        <>
          {console.log(foundCountry)}
          <h1>{foundCountry.name.official}</h1>
          
        </>
      );
}
export default countryDetails;