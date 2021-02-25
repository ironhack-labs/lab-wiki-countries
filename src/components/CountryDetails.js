import React from 'react'
import countries from './../countries.json'

function CountryDetails(props) {
    console.log('props', props)

    const countryId = props.match.params.idOfTheCountry;
    console.log('countryId', countryId);
  
    const country = countries.find((countryObj) => countryObj.cca3 === countryId)
    
    const callCountryName = (borderCode) => {
        console.log('hola', borderCode);
        for (let i = 0; i < countries.length; i++) {
            if (countries[i].cca3 === borderCode)
                return countries[i].name.common;
        }
        return borderCode;
    };

    return (
      <div>
        <h2>Country Details</h2>
        <h1>Country Name: { country.name.common}</h1>
        <h3>Capital: { country.capital}</h3>
        <p>Area: { country.area}</p>
        <p>Borders: <ul> { country.borders.map((border) => {
            return(
                <li>{callCountryName(border)}</li>
            )
        }) } </ul></p>
      </div>
    )
  }
  
  export default CountryDetails;