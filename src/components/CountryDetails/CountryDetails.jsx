import { Link, useParams } from "react-router-dom"
import { useState } from "react"
import countriesArray from '../../countries.json'

const CountryDetails = () => {

    const [countries, setCountries] = useState(countriesArray)

    const { country_alpha3Code } = useParams()

    const foundCountry = countries.find(elm => elm.alpha3Code === country_alpha3Code)

    const borderMap = foundCountry.borders.map((elm => {
        return <div>{elm}</div>
    }))

    return (
        <>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${foundCountry.alpha2Code.toLowerCase()}.png`} />
            <h1>{foundCountry.name.official}</h1>
            <h3>Capital {foundCountry.capital}</h3>
            <hr />
            <h3>Area {foundCountry.area}</h3>
            <hr />
            <h3>Borders</h3>
            <div key={foundCountry.alpha3Code}>
                <Link to={`/countries/${foundCountry.alpha3Code}`}>{borderMap}</Link>
            </div>
            <hr />
        </>
    )

}

export default CountryDetails