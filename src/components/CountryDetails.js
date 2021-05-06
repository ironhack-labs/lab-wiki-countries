import React from 'react'
import { link } from "react-router-dom"
import countries from '../countries.json'
const countriesParsed = JSON.parse(JSON.stringify(countries))



export default function CountryDetails(props) {

    const id = props.match.params.id; 
    const country = countriesParsed.find(e=>{
        return e.name.common === id;
    })

console.log(country)
console.log('here are the props ',props)
return(
    // const 
    <>
    <p>{country.name.common}</p>
    <p>Capital: {country.capital}</p>
    <p>Currency: {country.currency}</p>
    {/* <p>Languages: {country.languages}</p> */}
    </>
)
}