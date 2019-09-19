import React from 'react';
import Countries from "../../src/countries.json";
import {Link} from "react-router-dom";

function CountryDetails(props){
  let countryCode = props.match.params.CountryCode;
  let country = Countries.find(c => c.cca3 === countryCode);
  return (
    <div className =  "country-details">
      {/* {JSON.stringify(country)} */}
      <h1>{country.name.official}</h1>
      <hr/>
      <h3 className = "country-div">Capital : {country.capital[0]}</h3>
      <hr/>
      <h3 className = "country-div" >Area : {country.area}</h3>
      <hr/>
      <ul>
      {country.borders.map(b=>(
        <li key ={b}>
          <Link to ={"/CountryDetails/" + b}>{Countries.find(c => c.cca3 === b).name.common}</Link>
        </li>
      
      ))}
      </ul>

    </div>
  );
}


export default CountryDetails;
