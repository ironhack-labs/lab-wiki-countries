import React from 'react';
// import countries from "../countries.json";
import { Link } from "react-router-dom";


export default function CountriesList(props) {

    const countriesList = props.countries.map(country => {
        return (
            <div key={country.cca3}>
                <Link to={`/countries/${country.cca3}`}>{country.name.official}</Link>
            </div>
        )
    })

    return (
        <div>
           {countriesList}
        </div>
    )
}