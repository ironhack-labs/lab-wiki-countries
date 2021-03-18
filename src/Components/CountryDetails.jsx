import React from 'react'
import countriesJSON from '../countries.json'

const CountryDetails = (props) => {
    const countryID = props.match.params.cca3
    const foundCountry = countriesJSON.find((country)=> country.cca3 === countryID);


    return (
      <div>
        <h1>Country Details:</h1>
        <p>{props.match.params.cca3}</p>
        <p>Name: {foundCountry.name.common}</p>
        <p>Flag: {foundCountry.flag}</p>
        <p>Capital:{foundCountry.capital[0]}</p>
        <p>Area: {foundCountry.area} km2</p>

      </div>
    );
}

export default CountryDetails
