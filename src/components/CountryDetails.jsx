import React, {Component} from 'react';
import countries from '../countries.json';
import { Link } from "react-router-dom";





const countryDetails = (props) => {
   /*const getCountry = (id) => {
        const theCountry = oneCountry => {
            return oneCountry.id === id;
        }
        return countries.find(theCountry)
 };*/

 
 
 const params = props.match
 console.log(params)

return (
    
    
    <div>
      <h2><span style={{fontSize:"14px"}}></span></h2>
      <h3></h3>
      <p></p>
      
    </div>
)


}

export default countryDetails ;

