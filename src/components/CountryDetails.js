import React from 'react'
import { useParams, Link } from 'react-router-dom'

export default function CountryDetails(props) {

    const {alpha3Code} = useParams();
    
    const foundCountry = props.Country.find((Country)=>{
        return Country.alpha3Code === alpha3Code
    }); 

    return (
    <div>
        {!foundCountry && <h3>Country not found!</h3>}
        {foundCountry && (
            <>
                <h2>Country = {foundCountry.name.common}</h2>
                <h2>Capital = {foundCountry.capital}</h2>
            </>
        )}
        

    </div>
  )
}
