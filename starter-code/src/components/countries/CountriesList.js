import React from 'react'
import countries from '../../countries'
import { Link } from 'react-router-dom'

const CountriesList = () =>{
    return(
        <div>
            <h1>WikiCountries</h1>
            {countries.map((country,index) =>{
                return(
                        <Link to={'/country/'+country.ccn3} key={index}>
                            <p>{country.flag}{country.name.common}</p>
                        </Link>
                )
            })}
        </div>
    )
}

export default CountriesList