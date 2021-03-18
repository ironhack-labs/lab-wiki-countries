import React from 'react'
import countriesJson from '../countries.json'

const CountryDetails = (props) => {
    const countryID = props.match.params.cca3;
    const foundCountry = countriesJson.find((country) => country.cca3 === countryID);
    const foundborders = foundCountry.borders.map((borderID)=>
    countriesJson.find((country)=>country.cca3===borderID))
    console.log(foundborders)
    return (
        <div>
            <h1>{foundCountry.name["common"]}</h1>
            <h3>Capital : {foundCountry.capital}</h3>
            <h3>Area : {foundCountry.area} km2</h3>
            <h3>Borders : </h3>
            <ul> 
                {foundborders.map((border, index)=><div key={index}>{border.name["common"]}</div>)}
            </ul>

        </div>
    )
}

export default CountryDetails
