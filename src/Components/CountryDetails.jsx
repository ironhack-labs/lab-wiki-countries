import React from 'react'
import countriesJSON from './../countries.json'
import { Link } from "react-router-dom";


function CountryDetails(props) {

    const countryID = props.match.params.cca3;

    const foundCountry = countriesJSON.find((country) => country.cca3 === countryID);

    // console.log(props)

    return (
        <div>
            <h1>{foundCountry.name.common}</h1>
            <pre>{JSON.stringify(props, null, 2)}</pre>
            <p>{props.match.params.cca3}</p>
            <p>{foundCountry.capital.join(' ')}</p>
            <p>{foundCountry.area} km²</p>
            <p>I'm a Border {foundCountry.borders.map( function (border)  {
                return(
                    
                        <p><Link to ={`/countries/${border}`}>{border}</Link></p>
                    
                )
            })}</p>
        </div>
    )
}

export default CountryDetails
