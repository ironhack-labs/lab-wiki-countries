import React from 'react'
import { Link } from 'react-router-dom'
function CountriesList(props) {
    // console.log(props.countries)

    return (
        <ul>
            {props.countries.map(country => {
                return (
                    <li key={country.alpha3Code}>
                        <Link to={`/${country.alpha3Code}`}>
                            {country.name.official}
                        </Link>
                    </li>
                )
            })}

        </ul>
    )

}
export default CountriesList;