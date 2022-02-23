import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


function CountriesList({ countries }) {

    return (
        <div>
            <h1> Countries List </h1>
            {countries.map(country => {
                return (
                    <div key={country.alpha3Code} className="country">
                        <h2>{country.name.official}</h2>
                        <Link to={`/details/${country.alpha3Code}`}> Ver detalles de {country.name.official}</Link>
                    </div>
                )
            })}

        </div>

    )
}


export default CountriesList