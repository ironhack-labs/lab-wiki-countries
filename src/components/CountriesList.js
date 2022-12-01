import React from 'react'
import { Link } from "react-router-dom";

function CountriesList({ countriesList }) {
    // console.log("component", countriesList);

    return (
        <div className="container">
            <h1>Countries</h1>
            <div className="row justify-content-center">
            <div className="col-5">
                <div className="list-group">
                {countriesList.map((country) =>{
                    return ( 
                    <div key={country.alpha3Code} className="country-listed border p-2 mb-2">
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />
                        <Link to={`/country/${country.alpha3Code}`}>{country.name.official}</Link>
                    </div>
                    )
                })}
                </div>
            </div>
            </div>
        </div>
             
    )
}

export default CountriesList


