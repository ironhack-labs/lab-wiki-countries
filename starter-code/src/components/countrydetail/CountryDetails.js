import React, { Component } from 'react';
import countries from '../../countries.json'



function CountryDetails (props){


  const findCountry = (cca3) =>{
    return countries.filter(country =>{return country.cca3 === cca3})
    
  }
 
  const {params} = props.match
  const theCountry =  findCountry(params.cca3)[0]
console.log(theCountry)

  return(
        
      <div>
        <p>{theCountry.name.common}</p>
      </div>
    );
  
}

export default CountryDetails