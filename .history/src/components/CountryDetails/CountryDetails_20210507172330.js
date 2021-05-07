import React from "react";
import {Link} from "react-router-dom";
import countries from "../../countries.json"


function CountriesDetails(props) {
    console.log("PROPS DINS",props)
    const countryId = props.match.params.id;

    const country = countries.find(country => country.cca3 === countryId)
    
    
    console.log(countryId)
    console.log(country)
 
    
    return (
        <div className="col-7">
           <p>name</p>
        </div>

    )
}

export default CountriesDetails;