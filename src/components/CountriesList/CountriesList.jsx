
import {  useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import countriesData from '../../countries.json'

function CountriesList() {
    const [countries, setCountries] = useState(countriesData)

    useEffect(() => {
        setCountries(countriesData)
    }, [])

    return(
        <div>
            <h2>Countries</h2>
            {countries.map((country) => {
                return (
                    <div key={country.alpha3Code}>
                        <Link to={`/${country.alpha3Code}`}> {country.name.official} </Link>
                    </div>
                )
            })}
        </div>
    )
}
export default CountriesList