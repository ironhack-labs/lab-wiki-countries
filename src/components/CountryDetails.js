import { useState } from "react";
import {Routes, Route, Link, useParams} from "react-router-dom";

function CountryDetails({code}) {
    let {countryCode} = useParams();
    console.log(code);


    return(
        <div>
            <h3>Name: </h3>
            <h3>Code: {countryCode}</h3>
        </div>

    )
}

export default CountryDetails;