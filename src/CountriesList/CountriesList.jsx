import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import countriesData from "../countries.json";
import './CountriesList.css'

function CountriesList({countries}) {
    // const [countries, setCountries] = useState([])

    // useEffect(()=> {
    //     setCountries(countriesData)
    // }, [])

    return (
        <div>
            <ul>
                {countries.map(eachCountry => {
                    return (
                        <Link className="list" to={`/${eachCountry.alpha3Code}`}><li key={eachCountry.alpha3Code}>{eachCountry.name.common}</li></Link>
                    )
                })}
            </ul>
        </div>
    )
}

export default CountriesList