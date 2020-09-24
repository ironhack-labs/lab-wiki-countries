import React from 'react';
import countries from '../countries.json';
import { Link } from "react-router-dom";

export default function CountriesList() {
    
    return (

        countries.map(country => {
        return (
           <Link> <li>
                {country.name.official}
            </li></Link>
       )
        })  
    )
}
