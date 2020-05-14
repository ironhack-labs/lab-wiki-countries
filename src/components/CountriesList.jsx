import React from 'react'
import countries from '../countries.json'
import {Link} from 'react-router-dom'

export default function CountriesList() {
    return (
        countries.map((country, index) => (
            <div key={index}>
                <Link className="list-group-item list-group-item-action text-left" to={"/" + country.cca3}>
                        {country.flag} 
                        {" "}
                        {country.name.common}
                </Link>
            </div>
        ))
    )
}