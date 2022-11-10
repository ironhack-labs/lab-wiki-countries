import React from 'react'
import countries from "../countries.json"
import CountryDetails from '../pages/CountryDetails'
import axios from 'axios';
import { Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function CountriesList(props) {
//to pass arrays from API get you must use useState like thie
//useState([])

 
 
console.log({REGCOUNTRIES: countries[0]})
  return (
    <div >
       <h1 className="countListTitle">COUNTRIES LIST</h1>
       
      <div className="countriesList">

      { console.log({TRUE: props.theCountries})}
     
     
       <div className="routeLinkToCountry">
        {/* API GET USE EFFECT GET VERSION */}
       <h1>API GET VERSION</h1>
       {props.apiCountries.map((country, index) => {
        // console.log(country.alpha3Code)
        
       return (
       <div>
       



 
          <Link to ={`/${country.alpha3Code}`}>
          {country.name.common}
            </Link>

       

       
       </div>
       )

       })}
{/* STATIC VERSION */}
{/* <h1>static data version</h1>
       {countries.map((country, index) => {
        // console.log(country.alpha3Code)
        
       return (
       <div>
       


     

 
          <Link to ={`/countriesList/${country.alpha3Code}`}>
          {country.name.common}
            </Link>


       
       </div>
       )

       })} */}
       </div>
       </div>

    </div>
  )
}
