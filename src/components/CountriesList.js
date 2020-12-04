import React from "react";
import { Link } from 'react-router-dom';


const CountriesList = (props) => {
  
const allCountries = props.countries;
// console.log("from countriesList", allCountries);


  return (
    <>
      <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
        <div className="list-group">
          {allCountries.map(country => {
            return (
            <Link key={country.cca3} 
            className="list-group-item list-group-item-action" 
            to={`/${country.cca3}`}>
            {country.flag} {country.name.official}
            </Link>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default CountriesList;
