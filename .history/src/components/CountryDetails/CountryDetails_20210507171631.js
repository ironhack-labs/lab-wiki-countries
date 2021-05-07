import React from "react";
import {Link} from "react-router-dom";
import countries from "../../countries.json"


function CountriesDetails(props) {
    console.log("PROPS DINS",props)
    
    const countryId = props.match.params.id;

    const country = props.countries.find

    console.log(countryId)
 
    
    return (
        <div className="col-7">
           <p>name</p>
        </div>

    )
}

export default CountriesDetails;