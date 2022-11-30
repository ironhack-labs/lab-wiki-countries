import CountriesArray from './../../countries.json'
import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'


const CountryDetails = () => {
    const [country, setCountry] = useState(CountriesArray)
    const { alpha3Code } = useParams()
    const foundCountry = country.find(elm => elm.alpha3Code === alpha3Code)

    return (
        <>
            <div className="container">
                <h1>{foundCountry.name.official}</h1>
                <h3>Capital: {foundCountry.capital}</h3>
                <h3>Region: {foundCountry.region}</h3>
                <h3>Sub-Region: {foundCountry.subregion}</h3>
                <h3>Borders:
                    {foundCountry.borders.map(elm => {
                        return (
                            <Link to={`/details/${elm}`}><div>{elm}</div></Link>
                        )
                    })}
                </h3>
            </div>
        </>
    )
}

export default CountryDetails