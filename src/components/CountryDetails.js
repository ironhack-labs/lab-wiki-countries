import React from 'react'
import { Link } from 'react-router-dom';
import countries from '../countries.json'

const CountryDetails = (props) => {
   
  
        console.log(props)
       
        let theCountry = props.match.params.cca3
       let country = props.countries.find(country => country.cca3 === theCountry)

        return(
            <div>
            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital[0]}</p>
            <p>Area: {country.area} km2</p>
            <p>Borders:</p>
            <ul>
               {country.borders.map((border, index) =>{
                   let borderCountry = countries.find(obj=>obj.cca3 === border)
                   return (<li key={index}><Link to={`/${borderCountry.cca3}`}>{borderCountry.name.common}</Link></li>)
               })}
            </ul>
        </div>
        )
    }


export default CountryDetails