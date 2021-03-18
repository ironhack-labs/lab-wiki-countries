import React from 'react'
 import countries from './../countries.json'
 import { Link } from 'react-router-dom'



 export default function CountryDetails(props) {

     const country = countries.find(country => country.cca3 === props.match.params.cca3)

     return (
         <div>
             <h1>Country Details</h1>
         <h2>{country.name.common}</h2>
         <h3>{country.region}</h3>
         <h3>{country.flag}</h3>
            
       </div>
     )
 }