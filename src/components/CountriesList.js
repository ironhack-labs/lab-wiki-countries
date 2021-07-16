import React from 'react'
import countryData from '../countries.json'
import { Link } from 'react-router-dom';
//import { Component } from "react"


 export default function CountriesList() {
     return (
         <div>
        {countryData.map(elm =>
                <div key={elm.cca3}>
                <Link to={`/${elm.cca3}`}>{elm.flag} {elm.name.common}</Link>
                </div>
                )}
         </div>
    )
 }

