import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import countriesData from '../countries.json'

function CountryDetails() {

    const [country, setCountry] = useState(countriesData)

    const { country_id } = useParams()

    const foundCountry = country.find(elm => elm.alpha3Code === country_id)

    return (
        <div>
            <p>{foundCountry.name.official}</p>
        </div>
    )
}

export default CountryDetails
