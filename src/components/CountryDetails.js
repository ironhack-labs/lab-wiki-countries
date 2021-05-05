import React from 'react';
import {  Link,  } from 'react-router-dom'
import countries from '../countries.json'
import CountriesList from './CountriesList'


const CountryDetails = props => {
    const country = CountriesList.find(elm => elm.name === props.match.params)
    
    return (
        <div>
            <h1>{country.name}</h1>
            <p>{country.capital}</p>
            <p>{country.area}</p>
        </div>
    )
}

 export default CountryDetails

