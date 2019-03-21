import React from 'react';
//import queryString from 'query-string'
import countries from "../countries"
const CountryDetail = props =>{

const getCountry =cca3=>{
    const theCountry = oneCountry =>{
        return oneCountry.cca3 === cca3
    }
   return countries.find(theCountry)
}

const foundCountry = getCountry(props.match.params.cca3)

return(
    <div>
        <h2>Country:  <span>{foundCountry.name.common} </span></h2>
          <h3>Capital:  <span>{foundCountry.capital[0]}</span></h3>
          <p>{foundCountry.borders.map((border,index) => {
              return(
                  <li key={index}>{border}</li>
              )
              
          })}</p>
          <p>{foundCountry.name.common}</p>
    </div>
)


}

export default CountryDetail 