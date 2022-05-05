import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import countriesData from './../../countries.json'



function CountriesList() {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        setCountries(countriesData)
    }, [])

    return (
        <div className="container-country">
            <h1>Countries</h1>
            {countries.map((country) => {
                return (
                    <div key={country.alpha3code} className="country-name">
                        <Link to="/">{country.name.common}</Link>
                    </div>
                )
            })}
        </div>
    )

}

export default CountriesList
