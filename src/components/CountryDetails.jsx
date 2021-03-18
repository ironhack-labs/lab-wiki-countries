import React from "react";
import countriesJSON from "../countries.json";

const CountryDetails = (props) => {
  const countryID = props.match.params.cca3;

  const foundCountry = countriesJSON.find((country) => country.cca3 === countryID);
  console.log(foundCountry);
  console.log(foundCountry.name.common);
  console.log(props);
  return (
    <div style={{ textAlign: "left" }}>
      <h1>Selected country</h1>
      

    
       <p>{foundCountry.name.common}</p> 
     
    </div>
  );
};

export default CountryDetails;