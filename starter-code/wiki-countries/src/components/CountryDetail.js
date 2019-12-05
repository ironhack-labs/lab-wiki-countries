import React from "react";
// import { Link } from "react-router-dom";
import countries from "../countries.json";

console.log(countries);

const CountryDetail = props => {
  console.log('El valor del URL param "id" es: ', props.match.params.id);

     const getCountry = id => countries.find(countryDetail => countryDetail.cca3 === id);
    const foundCountry = getCountry(props.match.params.id);

  return (
    <div className="col-md-5">
      
      <h1>{foundCountry.name.common}</h1> 
    </div>
  );
};

export default CountryDetail;
