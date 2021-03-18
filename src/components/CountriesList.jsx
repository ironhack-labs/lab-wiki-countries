import React from "react";
import { Link } from "react-router-dom";
import countriesJSON from "../countries.json";

const CountriesList =(props)=> {
  // {countriesJSON.map((country) => { 
  //   <h1><Link>{country.name.common}</Link></h1>
  //   console.log(country.name.common)
  
  //   })}
  let styles ={
    maxHeight: '90vh',
    overflow: 'scroll',
  }

     return (
     
      <div className="col-5" style={styles }>
        <div className="list-group">
        {/* <h1>Country Name</h1> */}
      {countriesJSON.map((country) => { 
        return (<h2 key={country.cca3}><Link className="list-group-item list-group-item-action" to={`/${country.cca3}`}>{country.name.common}</Link></h2>)
        
        })}  
    
      
        </div>
      </div>
    )
  
}

export default CountriesList;