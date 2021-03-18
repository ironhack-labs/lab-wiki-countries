import React from "react";
import countriesJSON from "./../countries.json";

const CountryDetails = (props) => {
    const countryID = props.match.params.cca3;
  
    const foundCountry = countriesJSON.find((country) => country.cca3 === countryID);

    return (
      <div style={{ textAlign: "left" }}>
        <h1>Selected country</h1>
        <p>{props.match.params.cca3}</p>
        <p>{foundCountry.name.common}</p>
      </div>
    );
  };
  
  export default CountryDetails;
  