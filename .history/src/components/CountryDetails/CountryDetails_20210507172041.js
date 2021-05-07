import React from "react";
import {Link} from "react-router-dom";
import countries from "../../countries.json"


function CountriesDetails(props) {
    console.log("PROPS DINS",props)
    const country = countries.find(country => country.cca3 ===)
    
    const countryId = props.match.params.name;

    console.log(countryId)
 
    
    return (
        <div className="col-7">
           <p>name</p>
        </div>

    )
}

export default CountriesDetails;