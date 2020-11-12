import React from "react";
import { Link } from 'react-router-dom';
import countries from '../countries.json';
const CountriesList = (props) => {
   // console.log(props.location.search) // string
   // const parsed = queryString.parse(props.location.search)
   // console.log(parsed) // object
  return (
    <div>
      <h2>Countries:</h2>
      {props.countries.map((eachCountries, index) => {
        return (
          <div key={eachCountries.cca3}>
          <img src ={eachCountries.flag} alt ="flag" ></img>
            <h3><Link to={`/countries/${eachCountries.cca3}`}>{eachCountries.cca3}</Link></h3>
      
            <hr />
          </div>
        );
      })}
    </div>
  );
};
export default CountriesList;