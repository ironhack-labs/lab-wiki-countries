import React from 'react'
import Countries from '../countries.json'
import { Link } from 'react-router-dom';

export default function CountryDetail (props){

    let country = Countries.filter((country)=>{
            return country.cca3 === props.match.params.cca3
         })[0]

    console.log(country.borders)

    
        return(
            <div>
                <h1>{country.name.common}</h1>
                <h2>Capital : {country.capital}</h2>
                <h2>Area : {country.area} km</h2>
                 <h2>Borders : {country.borders.map((elem)=>{
                    return <p><Link to={`/countries/${elem}`}>{elem}</Link></p>
                })}</h2> 
            </div>
        )
        
    
}