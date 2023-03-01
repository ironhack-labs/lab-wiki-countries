import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import countriesData from '../countries.json';
import './CountriesList.css'

function CountriesList() {

    const [countries, setCountries] = useState(countriesData)


    useEffect(() => {
        setCountries(countriesData)

    }, [])

    return (

        <div className='flag'>
            <ul>{countries.map(country => (
                <li key={country.alpha3Code}>
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={`${country.name.common} flag`} />
                    <Link to={`/countries/${country.alpha3Code}`}> {country.name.common}</Link>
                </li>))}
            </ul>
        </div>
    )
}
export default CountriesList