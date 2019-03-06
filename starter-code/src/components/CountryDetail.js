import React from 'react';
//import { Link } from 'react-router-dom';
import countries from '../countries.json';

const countryDetails = (props) => {
 
 let theCountry = countries.find((country) => {
      return country.cca3 === props.match.params.id
 });

  return(
    <div className="col-7">
        <h1>{props.match.params.id} {theCountry.name.common}</h1>
    </div>
  )
}

export default countryDetails;