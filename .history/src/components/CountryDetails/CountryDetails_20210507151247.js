import React from "react";
import {Link} from "react-router-dom";
import countries from "../../countries.json";

function CountriesDetails(props) {
    const caa = props.match.params.id;
    const country = countries.find(country => country.cca3 === cca);
    const getCountryName = cca => countries.find
    return (

    )
}

export default CountriesDetails;