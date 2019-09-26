import React from 'react'
import {Link} from 'react-router-dom'

export default function CountriesList({country}) {
    return (
        <div>
        <Link to={`/countries/${country.cca3}`}>
            <p>{country.name.common}</p>
        </Link>
        </div>
    )
}
