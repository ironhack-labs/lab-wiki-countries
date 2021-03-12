import React from 'react'
import { Link } from 'react-router-dom'
import CountriesData from '../countries.json'

const CountriesList = () => {

    return (
        
        <ul  class="list-group">
        {CountriesData.map((country, i) => {
            return (
                <Link to={`/${country.ccn3}`}>
                    <li className="list-group-item">{country.name.official} </li>
                </Link>
            )
            
        }

        ) }
               
        </ul>

        
    )
}


export default CountriesList;

