import React from 'react';
import countries from "../countries.json"
import { Link } from 'react-router-dom';



const countryDetails = (props) => {
  
  const getCountry = (cca3) => {
    
    const theCountry = oneCountry => {
      return oneCountry.cca3 === cca3;
    }
    
    return countries.find(theCountry)
  };

  
  const foundCountry = getCountry(props.match.params.id)  
  const borderCountry = foundCountry.borders.map(bc => countries.find(bCountry => bCountry.cca3 === bc))
  borderCountry.map(e => e.name.common)
  // const qString = queryString.parse(props.location.search)        // Query string
  // console.log(qString)

  // accede a esta URL para ver un query string muy aclaratorio:
  // http://localhost:3000/projects/3c?name=abrigo&color=red&size=small

  return (
    <div>
      <p>{foundCountry.name.common}</p>
      <p>{foundCountry.capital}</p>
      <p>{foundCountry.area} km<sup>2</sup></p>
      {borderCountry.map(e => <p> border: {e.name.common}</p>)}
    
    </div>
  )
}

export default countryDetails;