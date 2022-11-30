import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import countriesData from "./../countries.json"


function CountryDetails() {

    const [countries, setCountries] = useState(countriesData)
    const { country_id } = useParams()
    const foundCountry = countries.find(country => country.alpha3Code === country_id)
    // console.log(foundCountry)
    return (
        <>
            <h1>PAIS: {foundCountry.name.common}</h1>
            <h4>CAPITAL: {foundCountry.capital}</h4>
            <h5>AREA: {foundCountry.area}</h5>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`} alt="flag" />
            {/* <h6> {foundCountry.map()}</h6> */}

        </>
    )
}

export default CountryDetails