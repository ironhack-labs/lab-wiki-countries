import React from 'react'
import {Link} from 'react-router-dom'

import './CountriesList.css'

const CountriesList = (props) => {


    return (
        <div className="indivCountry">
            {
                props.countries.map((country) => {
                    return (
                        <Link to={`/${country.cca3}`}>
                            <div>
                                {country.flag} &nbsp; {country.name.common}
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default CountriesList