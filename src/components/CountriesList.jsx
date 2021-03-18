import React from 'react'
import { Link } from 'react-router-dom'
import countries from './../countries.json'


export default function CountriesList() {
    return (
        <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
        <div className="list-group">
            {countries.map(country => 
            <Link className="list-group-item list-group-item-action" to={`/${country.cca3}`} key={country.cca3}>
                {country.flag} {country.name.common}
            </Link>
            )}
        </div>
        </div>
    )
}
