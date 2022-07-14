import { Link } from "react-router-dom";
import { useState } from "react"

const CountriesList = ({ allCountries }) => {
    return (
        <div>
            {
                allCountries.map(country => {
                    return (

                        <div style={{ border:'solid', width:'50%', justifyContent: 'center' }} key={country.name.common}>
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />
                            <Link style={{ textDecoration: 'none', color: 'black' }} to={`/country-details/${country.alpha3Code}`}>{country.name.common} details</Link>
                        </div>
                    )
                })
            }
        </div>

    )


}

export default CountriesList