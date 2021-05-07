import React from "react";
import {Link} from "react-router-dom";
import countries from "../../countries.json"


function CountriesDetails(props) {
    console.log("PROPS DINS", props)
    const cca = props.match.params.id;
    const country = countries.find(country => country.cca3 === cca);
    const getCountryName = cca => countries.find(country => country.cca3 === cca).name.common;
 
    
    return (
        <div className="col-7">
           
        </div>

    )
}

export default CountriesDetails;