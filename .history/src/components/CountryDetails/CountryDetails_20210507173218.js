import React from "react";
import {Link} from "react-router-dom";
import countries from "../../countries.json"


function CountriesDetails(props) {
    console.log("PROPS DINS",props)
    const countryId = props.match.params.id;

    const country = countries.find(country => country.cca3 === countryId)
    
  
 
    
    return (
        <div>
            <h1>{country.name.common}</h1>
            
        </div>
    )
}

export default CountriesDetails;