import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function CountryDetails({countriesList}){
    
    const {alpha3code} = useParams();

    const selectedCountry = countriesList.find((choosenCountry) => {
        return choosenCountry.alpha3Code === alpha3code;
    })
   

    

    return (
        <div className="container">
            <h2>Country Detail</h2>
            <div className="card">
                <h2>{selectedCountry.name.official}</h2>
            </div>
        </div>
    )
}