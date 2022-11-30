import { useParams, Link } from "react-router-dom"
import { useState } from "react"
import countriesData from "./../../countries.json"

const CountriesDetails = () => { 

    const [countries, setCountry] = useState(countriesData)
    
    const { alpha3Code } = useParams()

    const foundCountry = countries.find(elm => elm.alpha3Code === alpha3Code)
    
    return (
        <>
            <h2 className="mt-4" key={foundCountry.name}>{foundCountry.name.common}</h2>
            <hr></hr>
            <h6><strong>Official Name:</strong> {foundCountry.name.official}</h6>
            <h6><strong>Capital:</strong> {foundCountry.capital}</h6>
            <h6><strong>Region:</strong> {foundCountry.region}</h6>
            <h6><strong>Sub-Region:</strong> {foundCountry.subregion}</h6>
            <ul><strong>Borders:</strong><br></br>
                {foundCountry.borders.map(elm => {
                    return <Link to={`/countries/${elm}`}>{elm}<br></br></Link>
                })}
            </ul>
        </>
    )
}

export default CountriesDetails