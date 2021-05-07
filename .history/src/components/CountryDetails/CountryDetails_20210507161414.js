import React from "react";
import {Link} from "react-router-dom";


function CountriesDetails(props) {
    const props = props.countries
    const countryId = props.match.params.id;
    const country = props.countries.find(country => country.cca3 === countryId);
    console.log("props", props)
   const getCountry = {}
    
    return (
        <div className="col-7">
           
        </div>

    )
}

export default CountriesDetails;