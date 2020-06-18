import React from 'react'
import countries from '../countries.json'
import CountriesList from './CountriesList'

export default function CountryDetail (props) {
    let country = countries.filter((country)=>{
        return country.cca3 === props.match.params.cca3
    })[0]
    return (
        <div>
            <CountriesList name={country.name.common} capital={country.capital} area={country.area} borders={country.borders} />
        </div>    
    )
} 