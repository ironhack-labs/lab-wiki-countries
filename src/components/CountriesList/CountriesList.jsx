import { useState, useEffect } from 'react'
import {Link} from "react-router-dom"
import './list-styles.css'

const CountriesList = ({countriesData}) => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        setCountries(countriesData)
    }, [])

    return (
        <div>
            <h5>Countries list</h5>
            {countries.map((country) => {
                return (
                    <Link to={`/${country.alpha3Code}`} key={country.name.official}>
                        <div className="countryCard">
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="" />
                            <h6>{country.name.official}</h6>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default CountriesList